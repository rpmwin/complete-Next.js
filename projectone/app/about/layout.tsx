import style from './styles.module.css'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <main className={style.main}>
      {children}
    </main>
    
    </>
    )
}

