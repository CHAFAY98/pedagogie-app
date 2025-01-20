interface StageTabProps {
  libelle: string;
  nombre: number;
  id: number;
  tap: (id: number) => void;
}

function StageTab(props: StageTabProps) {
  return (
    <button
      className="btn bg-white btn-light-primary position-relative me-5 fs-1"
      aria-label={`Stage tab for ${props.libelle}`}
      data-id={props.id}
      onClick={() => props.tap(props.id)}
    >
      <span className="svg-icon fs-1">
        <i className="bi bi-journal-bookmark-fill fs-2x"></i>
      </span>
      {props.libelle}
      <span className="position-absolute top-0 start-100 translate-middle badge badge-circle badge-success">
        {props.nombre}
      </span>
    </button>
  );
}

export default StageTab;
