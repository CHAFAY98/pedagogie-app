function AsideMenu() {
  return (
    <div className="aside-menu flex-column-fluid" id="kt_aside_menu">
      <div
        className="hover-scroll-overlay-y my-2 my-lg-5 pe-lg-n1"
        id="kt_aside_menu_wrapper"
        data-kt-scroll="true"
        data-kt-scroll-height="auto"
        data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
        data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu"
        data-kt-scroll-offset="5px"
      >
        <div
          className="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold"
          id="#kt_aside_menu"
          data-kt-menu="true"
        >
          <div className="menu-item py-2">
            <a
              className="menu-link active menu-center"
              href="../../demo6/dist/index.html"
              data-bs-trigger="hover"
              data-bs-dismiss="click"
              data-bs-placement="right"
            >
              <span className="menu-icon me-0">
                <i className="bi bi-house fs-2"></i>
              </span>
              <span className="menu-title">Home</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;
