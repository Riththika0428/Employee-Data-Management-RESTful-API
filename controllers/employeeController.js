import Employee from "../models/employeeModel.js";

// GET ALL
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET BY ID
export const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// CREATE
export const createEmployee = async (req, res) => {
  try {
    const { name, course, roll_no } = req.body;

    if (!name || !course || !roll_no) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const employee = await Employee.create({
      name,
      course,
      roll_no
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT (Full Update)
export const updateEmployee = async (req, res) => {
  try {
    const { name, course, roll_no } = req.body;

    if (!name || !course || !roll_no) {
      return res.status(400).json({ message: "All fields required" });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, course, roll_no },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PATCH (Partial Update)
export const patchEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
export const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
