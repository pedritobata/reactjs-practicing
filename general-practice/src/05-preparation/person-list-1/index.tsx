import { useEffect, useState, useMemo } from "react";
import { DEFAULT_LIST_SIZE } from "./constants";
import { getUsers } from "./data-source";
import { User } from "./types";
import CustomerList from "./components/CustomerList";
import SearchBar from "./components/SearchBar";
import { getActiveSubUsers, getSearchUsers } from "./utils";
import Button from "./components/Button";

const Index = (): JSX.Element => {
  const [users, setUsers] = useState<Partial<User>[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<Partial<User>[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showActiveSubs, setShowActiveSubs] = useState(false);

  useEffect(() => {
    const fetchUsers = async (size = DEFAULT_LIST_SIZE) => {
      try {
        const usersResp = await getUsers(size);
        setUsers(usersResp);
        setSelectedUsers([]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    let result = [...users];
    if(showActiveSubs) {
        result = getActiveSubUsers(result);
    }
    result = getSearchUsers(searchTerm, result);
   
    return result;
  }, [searchTerm, users, showActiveSubs]);


  const renderMoveCustomerButton = (id: number): JSX.Element => {
    const clickHandler = ()=>{
        setUsers([...users].filter(user => user.id !== id));
        const moved = users.find(user => user.id === id);
        if(moved) {
            setSelectedUsers([...selectedUsers, moved]);
        }
    }
    return <Button title="Move to selected list" onClick={clickHandler}/>
  }

  const renderMoveBackCustomerButton = (id: number): JSX.Element => {
    const clickHandler = ()=>{
        setSelectedUsers([...selectedUsers].filter(user => user.id !== id));
        const moved = selectedUsers.find(user => user.id === id);
        if(moved) {
            setUsers([...users, moved]);
        }
    }
    return <Button title="Remove from selected list" onClick={clickHandler}/>
  }

  return (
    <>
      <h1>Customer management</h1>
      <SearchBar onChangeText={(term) => setSearchTerm(term)} />
      <div>
        <label>
          Show only active subscriptors
          <input type="checkbox" checked={showActiveSubs} onChange={() => setShowActiveSubs(prev => !prev)}/>
        </label>
      </div>
      <CustomerList list={filteredUsers} renderItem={renderMoveCustomerButton}/>
      <h2>Selected Users</h2>
      <CustomerList list={selectedUsers} renderItem={renderMoveBackCustomerButton}/>
    </>
  );
};

export default Index;
