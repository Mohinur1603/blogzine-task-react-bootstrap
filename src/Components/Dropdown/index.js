import Dropdown from "react-bootstrap/Dropdown";

function BasicExample({ data, title, theme}) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-none" id="dropdown-basic">
        <span className={`${theme}`}>{title}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item, index) => (
          <Dropdown.Item href={`#/action-${index}`}>{item.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;
