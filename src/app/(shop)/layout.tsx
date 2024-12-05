import { Footer, TopMenu } from '@/components';
import { Sidebar } from '../../components/ui/sidebar/Sidebar';
import { auth } from '@/auth.config';
import { redirect } from 'next/navigation';


export default async function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  const session = await auth()  

  if (session?.user) {
    redirect('/')
  }

  return (
    <main className="min-h-screen">

      <TopMenu />
      <Sidebar/>

      <div className="px-0 sm:px-10">
        {children}
      </div>

      <Footer/>
    </main>
  );
}