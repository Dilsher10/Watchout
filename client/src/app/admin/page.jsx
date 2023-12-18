"use client";
import React from 'react';
import Sidebar from '../../../components/admin/Sidebar.jsx';
import Navbar from '../../../components/admin/Navbar.jsx';
import Footer from '../../../components/admin/Footer.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const page = () => {

  return (
    <>
      <div className="container-fluid position-relative bg-white d-flex p-0">

        <Sidebar />

        <div className="content" id='adminNavbar'>

          <Navbar />

          <div className="container-fluid pt-4 px-4 adminSec-1">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <img src="/admin/line-chart.png" className='img-fluid' alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Today Sale</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <img src="/admin/bar-graph.png" className='img-fluid' alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Total Sale</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <img src="/admin/area-chart.png" className='img-fluid' alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Today Revenue</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <img src="/admin/pie-chart.png" className='img-fluid' alt="" />
                  <div className="ms-3">
                    <p className="mb-2">Total Revenue</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="container-fluid pt-4 px-4">
            <div className="bg-light text-center rounded p-4">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <h6 className="mb-0">Recent Sale</h6>
                <a href="">Show All</a>
              </div>
              <div className="table-responsive">
                <table className="table text-start align-middle table-bordered table-hover mb-0">
                  <thead>
                    <tr className="text-dark">
                      <th scope="col">S. No</th>
                      <th scope="col">Date</th>
                      <th scope="col">Invoice</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Amount</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>01 Jan 2023</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary w-100 py-2" href="">Detail</a></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>01 Jan 2023</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary w-100 py-2" href="">Detail</a></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>01 Jan 2023</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary w-100 py-2" href="">Detail</a></td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>01 Jan 2023</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary w-100 py-2" href="">Detail</a></td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>01 Jan 2023</td>
                      <td>INV-0123</td>
                      <td>Jhon Doe</td>
                      <td>$123</td>
                      <td>Paid</td>
                      <td><a className="btn btn-sm btn-primary w-100 py-2" href="">Detail</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-12 col-xl-6">
                <div className="bg-light text-center rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Worldwide Sale</h6>
                    <a href="">Show All</a>
                  </div>
                  <canvas id="worldwide-sales"></canvas>
                </div>
              </div>
              <div className="col-sm-12 col-xl-6">
                <div className="bg-light text-center rounded p-4">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <h6 className="mb-0">Sale & Revenue</h6>
                    <a href="">Show All</a>
                  </div>
                  <canvas id="salse-revenue"></canvas>
                </div>
              </div>
            </div>
          </div>

          <Footer />

        </div>
      </div>
    </>
  )
}

export default page;