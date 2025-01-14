import LogoComponent from "./Logo";
import AsideMenu from "./AsideMenu";
function Aside() {
  return (
    <div
      id="kt_aside"
      className="aside pb-5 pt-5 pt-lg-0"
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'80px', '300px': '100px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      <LogoComponent />
      <AsideMenu />
    </div>
  );
}

export default Aside;
