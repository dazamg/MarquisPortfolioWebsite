import Header from '@/components/shared/Header';
import { ToastContainer } from 'react-toastify';

const BaseLayout = props => {
  const { className, user, layoutClass="with-bg", loading, children } = props;
  return (
    <div className="layout-container">
      <Header 
        className={layoutClass}
        user={user} 
        loading={loading}/>
      <main className={`cover ${className}`}>
        <div className="wrapper">
          {children}
        </div>
      </main>
      <ToastContainer />
    </div>
  )
}

export default BaseLayout;
