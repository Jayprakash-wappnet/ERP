import { ClientListToolbar } from "./ClientListToolbar";
import { useListView } from "../../core/ListViewProvider";

// import { ClientListGrouping } from "./ClientListGrouping";

const ClientListHeader = () => {
  const { selected } = useListView();

  return (
    <div className="card-header border-0 pt-6 justify-content-end">
      {/* begin::Card toolbar */}
      <div className="card-toolbar">
        {/* begin::Group actions */}
        {/* {selected.length > 0 ? <ClientListGrouping /> : <ClientListToolbar />} */}
        <ClientListToolbar/>
        {/* end::Group actions end */}
      </div>
      {/* end::Card toolbar */}
    </div>
  );
};

export { ClientListHeader };
