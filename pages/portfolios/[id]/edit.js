import BaseLayout from '../../../components/layouts/BaseLayout';
import BasePage from '../../../components/BasePage';
import withAuth from '../../../hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio, useUpdatePortfolio } from '../../../functions/portfolios';
import PortfolioForm from '../../../components/Portfolioform';
import { Row, Col } from 'reactstrap';
import { toast } from 'react-toastify';

const PortfolioEdit = ({user}) => {
  const router = useRouter();
  const [ updatePortfolio, {error}] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async(data) => {
    try{
       await updatePortfolio(router.query.id, data);
    toast.success("Portfolio has been updated!", {autoclose: 2000})
    } catch(e) {
      toast.error("Portfolio update failed", {autoclose: 2000})
    }
   
  }

  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header="Portfolio Edit">
        <Row>
          <Col md="8">
            { initialData &&
              <PortfolioForm
                onSubmit={_updatePortfolio}
                initialData={initialData}
              />
            }
            { error &&
              <div className="alert alert-danger mt-2"> {error}</div>

            }
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  )
}



export default withAuth(PortfolioEdit)('admin');