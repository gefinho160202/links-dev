import { FormEvent, useState, useEffect } from "react";

import Header from "../../components/header";
import Input from "../../components/input";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "firebase/firestore";

function Networks() {
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [whatsapp, setWatsapp] = useState("");

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, "social", "link");
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setLinkedin(snapshot.data()?.linkedin);
          setGithub(snapshot.data()?.github);
          setWatsapp(snapshot.data()?.whatsapp);
        }
      });
    }

    loadLinks();
  }, []);

  function handleRegister(event: FormEvent) {
    event.preventDefault();

    setDoc(doc(db, "social", "link"), {
      linkedin: linkedin,
      github: github,
      whatsapp: whatsapp,
    })
      .then(() => {
        console.log("Cadastrados com sucesso");
      })
      .catch((error) => {
        console.log("Erro ao salvar" + error);
      });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />
      <h1 className="text-white text-2x1 font-medium mt-8 mb-4">
        Minhas redes sociais
      </h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label className="text-white font-medium mt-2 mb-2">
          Link do Linkedin
        </label>
        <Input
          type="url"
          placeholder="Digite a url do linkedin..."
          value={linkedin}
          onChange={(event) => setLinkedin(event.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do github
        </label>
        <Input
          type="url"
          placeholder="Digite a url do github..."
          value={github}
          onChange={(event) => setGithub(event.target.value)}
        />

        <label className="text-white font-medium mt-2 mb-2">
          Link do whatsapp
        </label>
        <Input
          type="url"
          placeholder="Digite a url do whatsapp..."
          value={whatsapp}
          onChange={(event) => setWatsapp(event.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-500 font-medium h-9 rounded-md items-center justify-center flex mb-7"
        >
          Salvar links
        </button>
      </form>
    </div>
  );
}

export default Networks;
