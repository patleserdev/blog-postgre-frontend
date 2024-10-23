"use client";
import { useEffect, useState } from "react";
import { datas } from "../datas";
import GetSelectableDatas from "./GetSelectableDatas";
import Fileupload from "./Fileupload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faCircleMinus,
  faPenToSquare,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { reloading } from "../reducers/reloader";
import { deleteFile } from "../reducers/file";
import { openModal } from "../reducers/modal";

export default function Form({ schema }) {
  const BACKEND_URL = "http://localhost:3000";
  const dispatch = useDispatch();
  const reload = useSelector((state) => state.reloader.value);
  const file = useSelector((state) => state.file.value);
  const entity = useSelector((state) => state.entity.value);

  const [formData, setFormData] = useState(entity ? entity : []);
  const [addedSteps, setAddedSteps] = useState([]);
  const [stepInput, setStepInput] = useState("");
  const [editStep, setEditStep] = useState(null);
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [toEdit, setToEdit] = useState(entity ? true : false);
  const [identifier, setIdentifier] = useState("");

  useEffect(() => {
    getIdentifier();
  }, []);

  /**
   *  Définit identifier
   */
  const getIdentifier = async () => {
    return datas.filter((data) =>
      data.source == schema ? setIdentifier(data.identifier) : null
    );
  };

  /**
   *  mise à jour du formulaire
   */
  const handleChange = (e) => {
    // version boolean
    // console.log(e.target.attributes.field.value,e.target.checked)
    if (e.target.type == "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [e.target.attributes.field.value]: e.target.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [e.target.attributes.field.value]: e.target.value,
      }));
    }
  };

  /**
   * Soumission du formulaire
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if steps , add steps to formdata

    // vérifier tous les champs
    checkFields();
  };

  /**
   *  Contrôle de la présence des champs de Datas dans formData et s'ils contiennent bien une valeur
   */
  const checkFields = () => {
    const fieldErrors = [];
    setErrors([]);

    const inputs = [];
    datas.filter((data) =>
      data.source == schema
        ? data.inputs.map((input) =>
            input.required ? inputs.push(input.field) : null
          )
        : null
    );

    for (let input of inputs) {
      if (!Object.keys(formData).find((key) => key == input)) {
        fieldErrors.push(input);
      } else {
        if (formData[input] == "" || formData[input] == " ") {
          fieldErrors.push(input);
        } else {
          console.log(input, "ok");
        }
      }
    }

    setErrors(fieldErrors);

    if (fieldErrors.length == 0) {
      handlePush();
      setFormData([]);
    }
  };

  /**
   *  Envoi des données au backend
   */
  const handlePush = async () => {
    const uploadResult = await uploadImage();
    console.log("formdata avant push", formData);
    console.log("uploadResult", uploadResult);

    if (uploadResult?.result) {
      const updatedFormData = {
        ...formData,
        picture_url: uploadResult.url,
        public_id: uploadResult.publicid,
      };
      console.log('updatedformdata',updatedFormData)

      setFormData(updatedFormData);
      
      dispatch(deleteFile(null));
      await addPost(updatedFormData);
    } else if (!file) {
      await addPost(formData);
    }
  };

  /**
   *  Ajout d'une image au post
   */
  const uploadImage = async () => {
    if (file) {
      const formDataToUpload = new FormData();
      formDataToUpload.append("file", file[0], file[0].name);

      try {
        const response = await fetch(`${BACKEND_URL}/${schema}/addfile`, {
          method: "POST",

          // credentials: 'include' ,
          headers: {
            // Content-Type: "multipart/form-data",
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formDataToUpload,
        });

        if (response) {
          const result = await response.json();
          console.log("addfile result", result);

          return result;
        } else {
          console.error("Error uploading file:" + response.statusText);
          setErrors((prev) => [
            ...prev,
            "Error uploading file:" + response.statusText,
          ]);
          return null;
        }
      } catch (error) {
        console.error("Network error:", error);
        setErrors((prev) => [...prev, "Network error:" + error]);
        return null;
      }
    }
  };

  /**
   *  Ajout du post au backend
   */
  const addPost = async (formData) => {
    console.log("formdata en cours de route", formData);

    let entityToEdit = ``;
    if (entity) {
      entityToEdit = `/${entity[identifier]}`;
    }

    const response = await fetch(`${BACKEND_URL}/${schema}${entityToEdit}`, {
      method: !toEdit ? "POST" : "PUT",
      headers: {
        // Content-Type: "multipart/form-data",
        "Content-Type": " application/json",
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    if (response) {
      const result = await response.json();

      if (result.result) {
        setSuccess(result.message);
        setTimeout(() => {
          setSuccess("");
        }, 2000);

        dispatch(reloading(!reload));
        dispatch(deleteFile(null));
        dispatch(openModal(false));
      } else {
        setErrors((prev) => [...prev, result.error]);
      }
      console.log("addpostresult", result);
    }
  };

  /**
   * Ajout d'une étape - raz du champ textarea
   * @param {*} e
   */
  const handleToAddAStep = (e) => {
    e.preventDefault();
    if (stepInput.length != 0) {
      setAddedSteps((prev) => [...prev, stepInput]);
      setStepInput("");
    }
  };

  /**
   * Supprimer une étape - le supprime du tableau de steps
   * @param {*} e
   */
  const handleToRemoveAStep = (e, element) => {
    e.preventDefault();
    const toKeep = addedSteps.filter((e, i) => i != element);
    setAddedSteps(toKeep);
  };

  /**
   * Supprimer une étape - le supprime du tableau de steps
   * @param {*} e
   */
  const handleToEditAStep = (e, element) => {
    e.preventDefault();
    // const toKeep = addedSteps.filter((e, i) => i != element);
    // setAddedSteps(toKeep);
    setEditStep(element);
  };

  /**
   * Affichage du titre de page
   */
  const displayLabel = datas.map((e, i) =>
    e.source == schema ? (
      <h2 key={i} className="text-2xl p-1 px-2 mb-5">
        Ajouter {e.label}
      </h2>
    ) : null
  );

  /**
   * Affichage des éléments de formulaire
   *  * @param {schema} - récupère le schéma du parent
   *  * @param {datas} - tableau de structure importé
   */
  const displayInputs = datas.map((e) =>
    e.source == schema
      ? e.inputs.map((input, i) => (
          <div key={i} className="flex items-center justify-around  my-2 p-2">
            <label htmlFor={input.name} className="w-1/2 capitalize text-md">
              {input.label}
            </label>

            {input.type != "entity" &&
              input.type != "upload" &&
              input.type != "boolean" &&
              input.type != "longtext" &&
              input.type != "steps" &&
              input.type != "none" && (
                <input
                  {...input}
                  required={input.required}
                  key={input.field}
                  className={
                    errors.includes(input.field)
                      ? "border-red-500 border-1 w-1/2 text-black px-1"
                      : "w-1/2 text-black px-1"
                  }
                  type={input.type}
                  onChange={(e) => handleChange(e)}
                  value={
                    formData[input.field] !== undefined
                      ? decodeURI(formData[input.field])
                      : ""
                  }
                  placeholder={`Saisir ${input.placeholder}`}
                  // defaultValue={input.default}
                />
              )}
            {/* // afficher les choices de catégories */}
            {/* // requeter le back , restituer les datas triées par nom formatés */}
            {input.type == "entity" && (
              <select
                key={input.field}
                name={input.field}
                className={
                  errors.includes(input.field)
                    ? "border-red-500 border-2 w-1/2 text-black px-1"
                    : "w-1/2 text-black px-1 capitalize h-8"
                }
                // value={
                //   formData[input.field] != undefined
                //     ? formData[input.field]
                //     : ""
                // }
                value={
                  formData[input.field]
                    ? formData[input.field]
                    : formData[input.field] || ""
                }
                onChange={(e) => handleChange(e)}
                field={input.field}
              >
                <option value="" disabled>
                  Sélectionnez une catégorie
                </option>

                <GetSelectableDatas
                  counter={i}
                  source={input.entity}
                  valueinselect={input.valueinselect}
                  displayinselect={input.displayinselect}
                />
              </select>
            )}

            {input.type == "longtext" && (
              <textarea
                {...input}
                key={input.field}
                className={
                  errors.includes(input.field)
                    ? "border-red-500 border-2 w-1/2 text-black px-1"
                    : "w-1/2 text-black px-1"
                }
                value={
                  formData[input.field] !== undefined
                    ? decodeURI(formData[input.field])
                    : ""
                }
                placeholder={`Saisir ${input.placeholder}`}
                onChange={(e) => handleChange(e)}
                field={input.field}
              ></textarea>
            )}

            {input.type == "boolean" && (
              <div className="h-1/4 w-1/2">
                <input
                  type="checkbox"
                  className={
                    errors.includes(input.field)
                      ? "appearance-none w-4 h-4 border-2 border-red-500 bg-white"
                      : "shadow-lg h-4 w-4"
                  }
                  key={input.field}
                  onChange={(e) => handleChange(e)}
                  defaultChecked={
                    formData[input.field] ? formData[input.field] : false
                  }
                  field={input.field}
                />
              </div>
            )}

            {input.type == "upload" && (
              <div className="border h-1/4">
                <Fileupload />
              </div>
            )}

            {input.type == "range" && (
              <div className="w-12 px-2">
                {formData[input.field] | input.default}
                {input.unit}
              </div>
            )}

            {input.type == "steps" && (
              <div className="w-full">
                <div className="w-full">
                  {addedSteps.length > 0 && (
                    <div className="w-full border flex-col text-wrap p-2 text-justify">
                      {addedSteps.map((e, i) => (
                        <li
                          className="list-none break-words flex justify-between items-center"
                          key={i}
                        >
                          <div className="w-full h-full my-2">
                            <span className="font-bold">Etape {i + 1} :</span>{" "}
                            {editStep == i && (
                              <textarea className="w-full h-48 border-2 border-green-900 p-1">
                                {e}
                              </textarea>
                            )}
                            {editStep != i && e}
                          </div>

                          <div className="mx-2 flex-col items-center justify-center ">
                            <FontAwesomeIcon
                              title="Retirer"
                              size="lg"
                              icon={faCircleMinus}
                              className="rounded-full hover:bg-slate-500 hover:text-white p-1 transition-all"
                              onClick={(e) => {
                                handleToRemoveAStep(e, i);
                              }}
                            />

                            {editStep != i && (
                              <FontAwesomeIcon
                                title="Editer"
                                size="lg"
                                icon={faPenToSquare}
                                className="rounded-full hover:bg-slate-500 hover:text-white p-1 transition-all"
                                onClick={(e) => {
                                  handleToEditAStep(e, i);
                                }}
                              />
                            )}

                            {editStep == i && (
                              <FontAwesomeIcon
                                title="Confirmer"
                                size="lg"
                                icon={faCircleCheck}
                                className="rounded-full hover:bg-slate-500 hover:text-white p-1 transition-all"
                                onClick={(e) => {
                                  handleToConfirm(e, i);
                                }}
                              />
                            )}
                          </div>
                        </li>
                      ))}
                    </div>
                  )}

                  {!editStep && (
                    <>
                      <textarea
                        key={input.field}
                        name={input.field}
                        placeholder={`Saisir ${input.placeholder}`}
                        value={stepInput}
                        className="w-full w-[90%] px-2 mt-2 border-2 max-h-fit "
                        onChange={(e) => setStepInput(e.target.value)}
                      />

                      <button
                        className="border-2 hover:bg-slate-500 hover:text-white p-2 transition-all"
                        onClick={(e) => handleToAddAStep(e)}
                      >
                        Ajouter une étape &nbsp;
                        <FontAwesomeIcon
                          size="lg"
                          title="Ajouter"
                          icon={faCirclePlus}
                        />
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))
      : null
  );

  const displayErrors = [];

  if (errors) {
    errors.map((error, i) =>
      displayErrors.push(
        <li className="text-red-500" key={i}>
          {error}
        </li>
      )
    );
  }

  return (
    <div className="border w-full p-2 my-2">
      {displayLabel}
      <form onSubmit={(e) => handleSubmit(e)}>
        {displayInputs}
        <div className="w-full text-center">
          <button className="border mt-2 p-2 px-5 bg-slate-400 hover:bg-slate-600 hover:text-white transition-all">
            Valider
          </button>
        </div>
      </form>
      <div className="w-full mt-2 p-2 flex items-center justify-center">
        <div>
          {errors.length > 0 && <ul>Vérifier les champs : </ul>}
          {displayErrors}
        </div>

        <div className="text-green-500">{success}</div>
      </div>
    </div>
  );
}
