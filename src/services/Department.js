import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/departments';

export const listDepartments = () => axios.get(REST_API_BASE_URL);

export const createDepartment = (department) => axios.post(REST_API_BASE_URL, department);

export const getDepartmentById = (departmentId) => axios.get(REST_API_BASE_URL + '/' + departmentId);

export const updateDepartment = (departmentId, department) => axios.put(REST_API_BASE_URL + '/' + departmentId, department);