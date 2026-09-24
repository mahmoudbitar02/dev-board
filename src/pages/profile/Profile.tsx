import { useUsernameContext } from "../../context/UserContext";
import { useState } from "react";
import InputButton from "@/components/InputButton/InputButton";
import MyButton from "@/components/MyButton/MyButton";

function Profile() {
  const { username, setUsername } = useUsernameContext();
  const [inputUsername, setInputUsername] = useState(username);

  const [isSaved, setIsSaved] = useState(false);

  function saveUsername() {
    if (!inputUsername.trim()) return;

    setUsername(inputUsername);
    console.log("Username saved", { username: inputUsername });

    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 5000);
  }
  return (
    <div className="w-full max-w-115 mx-auto flex flex-col pt-2">
      <h2 className="text-2xl font-extrabold ">Profil</h2>

      <div className="w-full flex items-center flex-col gap-4 mt-6">
        <div className="card w-115 flex flex-col border border-black rounded-lg p-6 ">
          <h2 className="text-lg font-semibold">Benutzername ändern</h2>
          <p className=" text-sm mt-2 text-muted-foreground">Ändere deinen Benutzernamen für das Kanban-Board.</p>
          <div className="flex flex-col justify-center items-start  mt-5">
            <h3 className="text-sm font-medium">Name</h3>

            <InputButton value={inputUsername} setValue={setInputUsername} placeholder="Dein Name" />
            <div className="flex justify-center items-center gap-2 mt-4">
              <MyButton onSave={saveUsername} value={inputUsername} buttonText="Speichern" />
              {isSaved && <span className="text-sm font-medium text-green-600 animate-in fade-in duration-300">Gespeichert!</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
