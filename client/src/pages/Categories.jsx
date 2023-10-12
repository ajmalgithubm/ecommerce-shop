import React from 'react'
import Layout from '../components/Layout/Layout'
import { useCategory } from '../hook/category'

const Categories = () => {

    const categories = useCategory();

    return (
        <Layout>
            <div className="container">
                <h2>All Categories</h2>
                <div className="row mt-3">
                    {
                        categories?.map(c => (
                            <div className="col-md-6 mt-4" key={c?._id}>
                                <button className='btn btn-primary'>{c?.name}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Categories
