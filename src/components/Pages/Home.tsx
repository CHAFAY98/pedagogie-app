import StageTab from "./StageTab";

function HomeComponent() {

  const stages=[{id:1,libelle:'FCB',nombre:10},{id:2,libelle:'BEEODR',nombre:26},{id:3,libelle:'CAT 1',nombre:24},{id:4,libelle:'CAT 2',nombre:25}]


  const stage_tabs=stages.map((stg)=><StageTab key={stg.id} libelle={stg.libelle} />)

  return (<div id="kt_content_container" className="container-fluid">

    <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
      <div className="d-flex">
          {stage_tabs}
      </div>
    </div>

  </div>);
}

export default HomeComponent;
