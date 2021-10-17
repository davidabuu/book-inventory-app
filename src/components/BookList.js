import { Table, Input, Button, Space } from "antd";
import "antd/dist/antd.css";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import { GET_ALL_BOOKS } from "../utils/ApiList";

class BookList extends React.Component {
  state = {
    searchText: "",
    searchedColumn: "",
    loading: true,
    books: [],
    page: 1,
    pageSize: 5,
  };
  componentDidMount() {
    //Fetch the API 
    fetch(`${GET_ALL_BOOKS.getAllBooks}`)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          loading: false,
          books: result,
          page: 1,
          pageSize: 5,
        });
      });
  }
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}>
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}>
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const { books, loading, page, pageSize } = this.state;
    const dataColums = [
      {
        title: "Publisher",
        dataIndex: "publisher",
        key: 1,
        ...this.getColumnSearchProps("publisher"),
      },
      {
        title: "Name",
        dataIndex: "name",
        key: 2,
        ...this.getColumnSearchProps("name"),
      },
      {
        title: "ISBN",
        dataIndex: "isbn",
        key: 3,
        ...this.getColumnSearchProps("isbn"),
      },
      {
        title: "Author",
        dataIndex: "authors",
        key: 4,
        ...this.getColumnSearchProps("authors"),
      },
      {
        title: "EndDates",
        dataIndex: "released",
        key: 4,
        ...this.getColumnSearchProps("released"),
        render: (_text, record) => (
          <>
            {record.released ? (
              <p>{record.released.split("").slice(0, 10)}</p>
            ) : (
              ""
            )}
          </>
        ),
      },
    ];
    return (
      <Table
        columns={dataColums}
        dataSource={books}
        loading={loading}
        pagination={{
          current: page,
          pageSize: pageSize,
          onChange: (page, pageSize) => {
            this.setState({
              page,
              pageSize,
            });
          },
        }}
      />
    );
  }
}

export default BookList;
