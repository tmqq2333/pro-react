import React, { useState, useEffect } from "react";
import { Table, Input, Button, Pagination, Row, Col } from "antd";
const { Search } = Input;
import Topbox from "./topbox";
const TableComponent = ({ fetchData, columns, searchParams }) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  useEffect(() => {
    const fetchTableData = async () => {
      setLoading(true);
      const response = await fetchData({
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...searchText,
      });
      setData(response.data);
      setPagination({
        ...pagination,
        total: response.count,
      });
      setLoading(false);
    };
    fetchTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.current, pagination.pageSize, searchText]);
  const setTimeDate = (e) => {
    console.log("时间", e);
    setSearchText(e);
     setPagination({
       ...pagination,
       current: 1,
       pageSize: 10,
     });
  };
  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Topbox data={searchParams} setTimeDate={setTimeDate}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Topbox>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        //pagination={false}
        showTotal={(total) => `总共 ${total} 条数据`}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
      {/* <Row style={{ marginTop: 10 }} justify="end">
        <Col>
          <Pagination
            defaultCurrent={1}
            current={pagination.current}
            total={pagination.total}
            showSizeChanger
            onChange={handleTableChange}
          />
        </Col>
      </Row> */}
    </div>
  );
};
export default TableComponent;
