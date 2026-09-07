import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUsernameContext } from "../../context/UserContext";
import { useState } from "react";

function Profile() {
  const { username, setUsername } = useUsernameContext();
  const [inputUsername, setInputUsername] = useState(username);

  function saveUsername() {
    setUsername(inputUsername);
    console.log("Username saved", { username: inputUsername });
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

            <Input
              type="text"
              value={inputUsername}
              placeholder="Dein Name"
              className="w-full mt-1 py-5 focus-visible:border-2 focus-visible:border-primary focus-visible:ring-0 "
              onChange={(e) => setInputUsername(e.target.value)}
              maxLength={15}
            />
            <Button onClick={saveUsername} disabled={!inputUsername.trim()} className="mt-4 text-black hover:cursor-pointer p-5">
              Speichern
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
