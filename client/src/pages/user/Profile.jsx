import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'

const Profile = () => {
  return (
    <Layout title={"Your Profile - Ecommerce"}>
        <div className="container p-3">
            <div className="row">
                <div className="col-md-3">
                    <UserMenu/>
                </div>
                <div className="col-md-9">
                    <h3>Profile Content</h3>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Profile
