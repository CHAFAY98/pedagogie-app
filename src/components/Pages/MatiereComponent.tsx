interface MatiereComponentProps {
  libelle: string;
  id: number;
  tap: (id: number) => void;
  files: [];
}

function MatiereComponent(props: MatiereComponentProps) {
  return (
    <div className="col-lg-4 my-3">
      <div className="card shadow-sm">
        <div className="card-header">
          <h3 className="card-title" style={{ fontSize: "12px" }}>
            {props.libelle}
          </h3>
          <div className="card-toolbar">
            <button type="button" className="btn btn-sm btn-light">
              Télécharger
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatiereComponent;
