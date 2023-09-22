import React from 'react'
import Table from '@/components/table'
import { getStops } from "@/api/user";
const columns = [
  // { title: " ", dataIndex: "key", key: "key" },
  { title: "机架号", dataIndex: "StandNo", key: "StandNo" },
  { title: "停机原因", dataIndex: "StopReason", key: "StopReason" },
  {
    title: "停机开始时间",
    dataIndex: "AccStartTime",
    key: "AccStartTime",
    // ellipsis: true,

  },
  {
    title: "停机结束时间",
    dataIndex: "AccEndTime",
    key: "AccEndTime",

  },
  {
    title: "停机时长",
    dataIndex: "StopTotalTime",
    key: "StopTotalTime",
  },
  {
    title: "班次",
    dataIndex: "ShiftNo",
    key: "ShiftNo",

  },
  {
    title: "班组",
    dataIndex: "ShiftGroup",
    key: "ShiftGroup",

  },
];
const list = [
  { title: "计划批号", value: "rollPlanNo" },
  { title: "id", value: "id" },
  { title: "密码", value: "password" },
];
export default function work() {
  return (
    <Table columns={columns} fetchData={getStops} searchParams={list}>
      work
    </Table>
  );
}
