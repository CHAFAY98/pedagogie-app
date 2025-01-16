function StageTab(props){

    return (<a href="#"  className="card-body d-flex align-items bg-white  me-2">
        <span className="svg-icon fs-1">
            <i className="bi bi-bookmarks-fill fs-2x"></i>
        </span>

        <span className="ms-3 text-gray-700 parent-hover-primary fs-6 fw-bold">
            {props.libelle}
        </span>
    </a>);

}

export default StageTab;