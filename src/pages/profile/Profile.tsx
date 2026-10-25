import { useUsernameContext } from "../../context/UserContext";
import { useState } from "react";
import InputButton from "@/components/InputButton/InputButton";
import MyButton from "@/components/MyButton/MyButton";
import { showToast } from "@/Utils/utils";

function Profile() {
  const { username, setUsername } = useUsernameContext();
  const [inputUsername, setInputUsername] = useState(username);

  const [isSaved, setIsSaved] = useState(false);

  function saveUsername() {
    setUsername(inputUsername);
    console.log("Username saved", { username: inputUsername });
    showToast("success", "Username wurde erfolgreich aktualisiert");

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 2000);
  }

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col pt-2 px-4">
      <h1 className="text-2xl font-extrabold text-slate-900">Profil</h1>

      <div className="flex items-center flex-col gap-4 mt-6">
        <div className="w-full bg-white flex flex-col border border-slate-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Benutzername ändern</h2>
          <p className="text-sm mt-1 text-muted-foreground">Ändere deinen Benutzernamen für das Kanban-Board.</p>

          <div className="flex flex-col justify-center items-start mt-5 w-full">
            <label htmlFor="username" className="text-sm font-medium text-slate-700 mb-1.5">
              Name
            </label>

            <div className="w-full">
              <InputButton maxLength={30} id="username" value={inputUsername} setValue={setInputUsername} placeholder="Dein Name..." />
            </div>

            <div className="flex justify-start items-center gap-3 mt-5">
              <MyButton disabled={!inputUsername.trim()} onSave={saveUsername} value={inputUsername} buttonText="Speichern" />
              {isSaved && <span className="text-sm font-medium text-green-600 animate-in fade-in duration-300">Gespeichert!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
