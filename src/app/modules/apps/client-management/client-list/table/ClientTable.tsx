import React, { useState, useEffect, useContext } from "react";
import { Client } from "../core/_models";
import { ClientService } from "../core/_requests";
import { ClientListLoading } from "../components/loading/ClientListLoading";
import { ClientActionsCell } from "./columns/ClientActionsCell";
import { KTCardBody } from "../../../../../../helpers";
import ClientContext from "../context/ClientContext";
import { ClientListPagination } from "../components/pagination/ClientListPagination";

interface IState {
  loading: boolean;
  users: Client[];
  id: string;
  searchQuery: string;
}

export const ClientTable: React.FC = () => {
  const { user } = useContext(ClientContext);

  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as Client[],
    id: "",
    searchQuery: "",
  });

  // Pagination start
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 5;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  // Pagination end

  // network request

  useEffect(() => {
    setState({ ...state, loading: true });
    ClientService.getAllUsers()
      .then((res: any) =>
        setState({
          ...state,
          loading: false,
          users: res.data,
        })
      )
      .catch(() =>
        setState({
          ...state,
          loading: false,
        })
      );
    //eslint-disable-next-line
  }, []);

  const { loading, users } = state;

  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalClient = [...users, ...user];

  console.log(totalClient)

  const filteredClient = totalClient.filter((client) => {
    const searchLower = searchQuery.toLowerCase();
    return client.name.toLowerCase().includes(searchLower);
  });
  console.log(filteredClient);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endIndex = startIndex + ITEMS_PER_PAGE - 1;
  const currentItems = filteredClient.slice(startIndex - 1, endIndex);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <KTCardBody className="py-4">
      <div className="container table-responsive">
        <h1>CLIENT DATA FROM JSON PLACEHOLDER</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        {loading && <ClientListLoading />}
        <table className="table table-striped">
          <thead>
            <tr>
              {/* <td>ID</td> */}
              <td>NAME</td>
              <td>USER NAME</td>
              <td>EMAIL</td>
              <td>ACTIONS</td>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((user, index) => (
                <tr key={index}>
                  {/* <td>{startIndex + index}</td> */}
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {" "}
                    <ClientActionsCell id={ user.id }/>{" "}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7}>
                  <div className="d-flex text-center w-100 align-content-center justify-content-center">
                    No matching records found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <ClientListPagination
          totalPages={Math.ceil(totalClient.length / ITEMS_PER_PAGE)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {loading && <ClientListLoading />}
    </KTCardBody>
  );
};
