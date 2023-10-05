import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateProduct = () => {
  return (
    <Layout title={"Create Product - Ecommerce"}>
        <div className="container-fluid p-3">
            <div className="row">
                  <div className="col-md-3">
                    <h3>Admin Panel</h3>
                      <AdminMenu />
                  </div>
                  <div className="col-md-6">
                      <h2>create product</h2>
                  </div>
            </div>
        </div>
    </Layout>
  )
}

export default CreateProduct
