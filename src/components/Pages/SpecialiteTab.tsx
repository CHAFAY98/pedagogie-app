interface SpecialiteTabProps {
  libelle: string;
  nombre: number;
  id: number;
  tap: (id: number) => void;
}

function SpecialiteTab(props: SpecialiteTabProps) {
  return (
    <button
      className="btn bg-white btn-light-info  position-relative me-5 fs-2"
      aria-label={`Stage tab for ${props.libelle}`}
      data-id={props.id}
      onClick={() => props.tap(props.id)}
    >
      <span className="svg-icon fs-2">
        <i className="bi bi-bookmarks-fill fs-2"></i>
      </span>
      {props.libelle}
      <span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-success">
        {props.nombre}
      </span>
    </button>
  );
}

export default SpecialiteTab;
