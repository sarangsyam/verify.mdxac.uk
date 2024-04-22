import React from 'react'

export default function App() {
  return (
    <div className="kt-grid kt-grid--hor kt-grid--root">
    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">
        <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper" >
            <header id="m_header" className="kt-grid__item m-header " m-minimize="minimize" m-minimize-offset="200" m-minimize-mobile-offset="200">
                <div className="kt-header__top">
                    <div className="kt-container">
                        <div className="kt-stack kt-stack--ver kt-stack--desktop">
                            <div className="kt-stack__item kt-stack__item--fluid kt-header-head" id="m_header_nav">
                                <div id="m_header_topbar" className="kt-topbar  kt-stack kt-stack--ver kt-stack--general">
                                    <div className="kt-stack__item kt-topbar__nav-wrapper">
                                        <ul className="kt-topbar__nav kt-nav kt-nav--inline">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-grid--stretch">
                <div className="kt-container kt-body kt-grid kt-grid--ver" id="kt_body">
                    <div className="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" style={{padding:'0px 5%'}}>
                        <div id="svpPortlet" className="kt-portlet">
                            <div className="kt-portlet__body">
                                <div className="kt-header__brand-logo mb-4">
                                    <img alt="Dc Web" src="/images/logo-default.png" className="kt-header__brand-logo-default" />
                                    <img alt="Smart Verify Plus" src="/images/Smart-Verify-Plus-Logo.png" className="kt-header__brand-sublogo-default pull-right" />
                                </div>
                                <div className="alert alert-warning " role="alert">
                                    <div className="alert-icon"><i aria-hidden="true" className="fa fa-exclamation-triangle fa-4x"></i></div>
                                    <div className="alert-text">Reference 04833243-02-7REI has been found but this reference could be out of date</div>
                                </div>
                                <div className="row ">
                                    <div className="col-md-12 ">
                                        <img src="/certificate/c1.png" style={{width:'100%',maxHeight:'75vh'}} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="kt-footer  kt-footer--extended  kt-grid__item">
                <div className="kt-footer__bottom">
                    <div className="kt-container">
                        <div className="kt-footer__wrapper">
                            <div className="kt-footer__copyright"> 2024 © DSSL v1.5.20 </div>
                            <div className="kt-footer__menu">
                                <a href="/Pages/Privacy" className=" btn-md  "> Privacy </a>
                                <a href="/Pages/Faq" className=" btn-md  "> FAQ </a>
                                <a href="/Pages/Cookies" className=" btn-md  "> Cookies </a>
                                <a href="/Pages/Terms" className=" btn-md  "> Terms </a>
                                <a href="/Pages/Support" className=" btn-md  "> Support </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
