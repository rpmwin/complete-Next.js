import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          error: "user does not exist..!!",
        },
        {
          status: 400,
        }
      );
    }
    const validPasword = await bcryptjs.compare(password, user.password);

    if (!validPasword) {
      return NextResponse.json({
        error: " Invalid password...!!",
        status: 400,
      });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
        message:"Login is Successfull",
        success: true,
    })

    response.cookies.set("token" , token , {
        httpOnly:true,
    })

    return response

  } catch (error: any) {
    console.log("errror in login ", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
