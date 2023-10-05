import React from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'

const CreateCategory = () => {
  return (
    <Layout title={"Create Category - Ecommerce "}>
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-md-3">
                    <h3>Admin Panel</h3>
                    <AdminMenu/>
                </div>
                <div className="col-md-9">
                    <h2>Create category</h2>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default CreateCategory
