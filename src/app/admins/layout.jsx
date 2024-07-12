import Nav from '@/components/Nav';
import Menu from '@/components/Menu';
export default function homesLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav/>
       <Menu/> {children}
      </section>
    )
  }