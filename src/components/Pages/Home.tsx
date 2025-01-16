import React, { useState } from "react";
import StageTab from "./StageTab";
import SpecialiteTab from "./SpecialiteTab";
import MatiereComponent from "./MatiereComponent";

function HomeComponent() {
  const [stages, setStages] = useState<any[]>([
    { id: 1, libelle: "FCB", nombre: 10 },
    { id: 2, libelle: "BEEODR", nombre: 26 },
    { id: 3, libelle: "CAT 1", nombre: 24 },
    { id: 4, libelle: "CAT 2", nombre: 25 },
  ]);
  const [specialites, setSpecialites] = useState<any[]>([]);
  const [matieres, setMatieres] = useState<any[]>([]);

  const stageTap = (id: number) => {
    const newSpecialites = [
      { id: 1, libelle: "SP1", nombre: 10, id_stage: 2 },
      { id: 2, libelle: "SP2", nombre: 26, id_stage: 2 },
      { id: 3, libelle: "SP3", nombre: 24, id_stage: 2 },
    ];
    const filteredSpecialites = newSpecialites.filter(
      (specialite) => specialite.id_stage === id
    );
    setSpecialites(filteredSpecialites);
  };

  const specialiteTap = (id: number) => {
    const newMatieres = [
      {
        id: 1,
        libelle: "ALGORITHME",
        files: [],
        id_specialite: 2,
        id_stage: 2,
      },
      {
        id: 2,
        libelle: "LANGUAGE SQL",
        files: [],
        id_specialite: 2,
        id_stage: 2,
      },
      {
        id: 3,
        libelle: "ADOBE PHOTOSHOP",
        files: [],
        id_specialite: 2,
        id_stage: 2,
      },
    ];
    const filteredMatieres = newMatieres.filter(
      (matiere) => matiere.id_stage === id && matiere.id_specialite === id
    );
    setMatieres(filteredMatieres);
  };
  const stage_tabs =
    stages.length > 0 ? (
      stages.map((stg) => (
        <StageTab
          key={stg.id}
          id={stg.id}
          libelle={stg.libelle}
          nombre={stg.nombre}
          tap={stageTap}
        />
      ))
    ) : (
      <div className="text-center">Aucun stages</div>
    );

  const specialites_tab =
    specialites.length > 0 ? (
      specialites.map((sp) => (
        <SpecialiteTab
          key={sp.id}
          id={sp.id}
          libelle={sp.libelle}
          nombre={sp.nombre}
          tap={specialiteTap}
        />
      ))
    ) : (
      <div className="text-center">Aucune spécialité</div>
    );

  return (
    <div id="kt_content_container" className="container-fluid">
      <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
        <div className="d-flex justify-content-center">{stage_tabs}</div>
      </div>
      <div className="separator my-10"></div>
      <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
        <div className="d-flex justify-content-center h-50px">
          {specialites_tab}
        </div>
      </div>
      <div className="separator my-10"></div>
      <div
        className="container-xxl bg-white py-4"
        style={{
          minHeight: "500px",
          backgroundImage: "assets/media/illustrations/sketchy-1/20.png",
        }}
      >
        <div className="d-flex flex-wrap flex-stack">
          <h3 className="fw-bolder my-2">
            Liste des matires
            <span className="fs-6 fw-bold ms-1">(0)</span>
          </h3>

          <div className="d-flex my-2">
            <input
              type="email"
              className="form-control form-control-solid"
              placeholder="Recherche une matiere"
            />
          </div>
        </div>
        <div className="row">
          {matieres.length > 0 ? (
            matieres.map((matiere) => (
              <MatiereComponent
                key={matiere.id}
                libelle={matiere.libelle}
                id={matiere.id}
                tap={() => console.log(matiere.libelle)}
                files={[]}
              />
            ))
          ) : (
            <div className="text-center">Aucune matière disponible</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
