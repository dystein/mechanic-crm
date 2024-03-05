package com.mechanicshop.crm;

import com.mechanicshop.crm.model.Customer;
import com.mechanicshop.crm.model.Vehicle;
import com.mechanicshop.crm.service.CustomerService;
import com.mechanicshop.crm.service.RepairService;
import com.mechanicshop.crm.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import java.util.*;

@SpringBootApplication
public class MechanicCrmApplication implements CommandLineRunner {

	@Autowired
	private CustomerService customerService; // Service for handling customer-related operations
	@Autowired
	private VehicleService vehicleService; // Service for handling vehicle-related operations
	@Autowired
	private RepairService repairService; // Service for handling repair-related operations

	public static void main(String[] args) {
		SpringApplication.run(MechanicCrmApplication.class, args);
	}

	@Override
	public void run(String... args) {
		Scanner scanner = new Scanner(System.in);
		while (true) {
			// Main menu for the CLI application
			System.out.println("\nChoose a category:");
			System.out.println("1. Repairs");
			System.out.println("2. Vehicles");
			System.out.println("3. Customers");
			System.out.println("4. Exit");
			System.out.print("Enter your choice: ");

			String choice = scanner.nextLine();
			switch (choice) {
				case "1":
					handleRepairs(scanner);
					break;
				case "2":
					handleVehicles(scanner);
					break;
				case "3":
					handleCustomers(scanner);
					break;
				case "4":
					System.out.println("Exiting...");
					scanner.close();
					return; // Exit the application
				default:
					System.out.println("Invalid choice. Please try again.");
			}
		}
	}

	private void handleRepairs(Scanner scanner) {

	}

	private void handleVehicles(Scanner scanner) {
		// Vehicle operations menu
		System.out.println("\nVehicle Operations:");
		System.out.println("1. Add a new vehicle");
		System.out.println("2. Search for a vehicle");
		System.out.println("3. Return to main menu");
        System.out.println("4. Delete Vehicle");
		System.out.println("5. Import Vehicles");
		System.out.print("Enter your choice: ");

		String vehicleChoice = scanner.nextLine();
		switch (vehicleChoice) {
			case "1":
				addNewVehicle(scanner);
				break;
			case "2":
				searchForVehicle(scanner);
				break;
			case "3":
				// Returns to the main menu
				break;
            case "4":
                deleteVehicle(scanner);
                break;
			case "5":
				importVehicleData(scanner);
			default:
				System.out.println("Invalid choice. Please try again.");
		}
	}


	private void deleteVehicle(Scanner scanner) {
        System.out.print("Enter the ID of the vehicle to delete: ");
        Long vehicleId = Long.parseLong(scanner.nextLine());
        vehicleService.deleteVehicle(vehicleId);
    }

	private void addNewVehicle(Scanner scanner) {
        System.out.print("Enter vehicle make/brand: ");
		String make = scanner.nextLine();

		System.out.print("Enter vehicle model: ");
		String model = scanner.nextLine();

		System.out.print("Enter vehicle year: ");
		int year = Integer.parseInt(scanner.nextLine());

		System.out.print("Enter vehicle mileage: ");
		int mileage = Integer.parseInt(scanner.nextLine());

		System.out.print("Enter license plate: ");
		String licensePlate = scanner.nextLine();

        System.out.print("Enter license plate state: ");
        String state = scanner.nextLine();

        System.out.print("Enter any additional vehicle notes: ");
        String additionalNotes = scanner.nextLine();

		// Add other fields as necessary...

		System.out.println("Does this vehicle belong to an existing customer?");
		System.out.println("1. Yes");
		System.out.println("2. No");
		System.out.print("Enter your choice: ");
		String existingCustomerChoice = scanner.nextLine();
		Long customerId = null;
		if ("1".equals(existingCustomerChoice)) {
			customerId = searchAndSelectCustomer(scanner);
			if (customerId == null) {
				System.out.println("No customer selected, returning to vehicle menu.");
				return; // Go back if no customer is selected
			}
		} else if ("2".equals(existingCustomerChoice)) {
			addNewCustomer(scanner); // This should return the ID of the new customer
		} else {
			System.out.println("Invalid choice. Returning to vehicle menu.");
			return;
		}

		Vehicle vehicle = new Vehicle();
		vehicle.setMake(make);
		vehicle.setModel(model);
		vehicle.setYear(year);
		vehicle.setMileage(mileage);
		vehicle.setLicensePlate(licensePlate);
        vehicle.setState(state);
        vehicle.setAdditionalNotes(additionalNotes);
		// Set other fields...

		// Link to customer
		if (customerId != null) {
			Customer customer = customerService.getCustomerById(customerId)
					.orElseThrow(() -> new RuntimeException("Customer not found"));
			vehicle.setCustomer(customer);
		}

		vehicleService.saveVehicle(vehicle);
		System.out.println("Vehicle added successfully!");
	}

	private Long searchAndSelectCustomer(Scanner scanner) {
		System.out.print("Enter customer name or phone number to search: ");
		String query = scanner.nextLine();

		List<Customer> customers = customerService.searchCustomers(query);
		if (customers.isEmpty()) {
			System.out.println("No customers found.");
			return null;
		}

		System.out.println("Select a customer by ID:");
		for (Customer customer : customers) {
			System.out.println("ID: " + customer.getCustomerID() + ", Name: " + customer.getName());
		}
		System.out.print("Enter the customer ID: ");
		String customerIdInput = scanner.nextLine();
		try {
			return Long.parseLong(customerIdInput);
		} catch (NumberFormatException e) {
			System.out.println("Invalid customer ID.");
			return null;
		}
	}

	private void searchForVehicle(Scanner scanner) {
        System.out.println("\nEnter search criteria for the vehicle:");
        System.out.println("1. By Make");
        System.out.println("2. By Model");
        System.out.println("3. By License Plate");
        System.out.print("Enter your choice: ");
        String searchChoice = scanner.nextLine();

        List<Vehicle> vehicles = new ArrayList<>();
        switch (searchChoice) {
            case "1":
                System.out.print("Enter make: ");
                String make = scanner.nextLine();
                vehicles = vehicleService.searchVehiclesByMake(make);
                break;
            case "2":
                System.out.print("Enter model: ");
                String model = scanner.nextLine();
                vehicles = vehicleService.searchVehiclesByModel(model);
                break;
            case "3":
                System.out.print("Enter license plate: ");
                String licensePlate = scanner.nextLine();
                vehicles = vehicleService.searchVehiclesByLicensePlate(licensePlate);
                break;
            default:
                System.out.println("Invalid choice. Please try again.");
                return;
        }

        if (vehicles.isEmpty()) {
            System.out.println("No vehicles found.");
        } else {
            System.out.println("Found vehicles:");
            for (Vehicle vehicle : vehicles) {
                // Assuming your Vehicle class has a getCustomer() method to access the Customer entity
                Customer owner = vehicle.getCustomer();
                System.out.println("Vehicle ID: " + vehicle.getVehicleId() +
                        ", Make: " + vehicle.getMake() +
                        ", Model: " + vehicle.getModel() +
                        ", License Plate: " + vehicle.getLicensePlate() +
                        ", Year: " + vehicle.getYear() +
                        ", Mileage: " + vehicle.getMileage() +
                        ", State: " + vehicle.getState() +
                        ", Notes: " + vehicle.getAdditionalNotes());
                if (owner != null) {
                    System.out.println("Owned by: " + owner.getName() +
                            ", Phone: " + owner.getPhone() +
                            ", Email: " + owner.getEmail());
                } else {
                    System.out.println("This vehicle is not linked to an owner.");
                }
            }
        }

    }



	private void handleCustomers(Scanner scanner) {
		// Customer operations menu
		System.out.println("\nCustomer Operations:");
		System.out.println("1. Add new customer");
		System.out.println("2. Search for customer");
		System.out.println("3. Return to main menu");
        System.out.println("4. Delete Customer");
		System.out.println("5. Import Customers");
		System.out.print("Enter your choice: ");

		String customerChoice = scanner.nextLine();
		switch (customerChoice) {
			case "1":
				addNewCustomer(scanner);
				break;
			case "2":
				searchForCustomer(scanner);
				break;
			case "3":
				// Returns to the main menu
				break;
            case "4":
                deleteCustomer(scanner);
                break;
			case "5":
				importCustomerData(scanner);
			default:
				System.out.println("Invalid choice. Please try again.");
		}
	}

	private void importCustomerData(Scanner scanner) {
		System.out.print("Enter the Excel file path for customers: ");
		String filePath = scanner.nextLine();

		try {
			FileInputStream excelFile = new FileInputStream(new File(filePath));
			Workbook workbook = new XSSFWorkbook(excelFile);
			Sheet datatypeSheet = workbook.getSheetAt(0);
			Iterator<Row> iterator = datatypeSheet.iterator();

			List<Customer> customers = new ArrayList<>();
			while (iterator.hasNext()) {
				Row currentRow = iterator.next();
				if (currentRow.getRowNum() == 0) continue; // Skip header row

				Customer customer = new Customer();
				customer.setName(Optional.ofNullable(currentRow.getCell(0)).map(Cell::getStringCellValue).orElse(""));
				customer.setPhone(Optional.ofNullable(currentRow.getCell(1)).map(Cell::getStringCellValue).orElse(""));
				customer.setEmail(Optional.ofNullable(currentRow.getCell(2)).map(Cell::getStringCellValue).orElse(""));
				customer.setAddress(Optional.ofNullable(currentRow.getCell(3)).map(Cell::getStringCellValue).orElse(""));
				customers.add(customer);
			}

			// Save all customers to database
			customerService.saveAllCustomers(customers);
			System.out.println("Customers imported successfully!");

			workbook.close();
			excelFile.close();
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("Failed to import customers. Error reading the Excel file.");
		}
	}


	private void importVehicleData(Scanner scanner) {
		System.out.print("Enter the Excel file path for vehicles: ");
		String filePath = scanner.nextLine();

		try {
			FileInputStream excelFile = new FileInputStream(new File(filePath));
			Workbook workbook = new XSSFWorkbook(excelFile);
			Sheet datatypeSheet = workbook.getSheetAt(0);
			Iterator<Row> iterator = datatypeSheet.iterator();

			List<Vehicle> vehicles = new ArrayList<>();
			while (iterator.hasNext()) {
				Row currentRow = iterator.next();
				if (currentRow.getRowNum() == 0) continue; // Skip header row

				Vehicle vehicle = new Vehicle();

				// Check if the customer ID cell is numeric and not null
				Cell customerIdCell = currentRow.getCell(1);
				if (customerIdCell != null && customerIdCell.getCellType() == CellType.NUMERIC) {
					Long customerId = (long) customerIdCell.getNumericCellValue();
					// Ensure the customer exists in the database
					Customer customer = customerService.getCustomerById(customerId).orElse(null);
					vehicle.setCustomer(customer);
				}

				// Safely retrieve values for each cell, accounting for possible null or different cell types
				vehicle.setMake(getCellStringValue(currentRow.getCell(2)));
				vehicle.setModel(getCellStringValue(currentRow.getCell(3)));
				vehicle.setYear(getCellIntegerValue(currentRow.getCell(4)));
				vehicle.setMileage(getCellIntegerValue(currentRow.getCell(5)));
				vehicle.setLicensePlate(getCellStringValue(currentRow.getCell(6)));
				vehicle.setAdditionalNotes(getCellStringValue(currentRow.getCell(7)));
				// Add any additional fields as necessary

				vehicles.add(vehicle);
			}

			// Save all vehicles to the database
			vehicleService.saveAllVehicles(vehicles);
			System.out.println("Vehicles imported successfully!");

			workbook.close();
			excelFile.close();
		} catch (IOException e) {
			e.printStackTrace();
			System.out.println("Failed to import vehicles. Error reading the Excel file.");
		}
	}

	private String getCellStringValue(Cell cell) {
		return Optional.ofNullable(cell).map(c -> {
			if (c.getCellType() == CellType.STRING) {
				return c.getStringCellValue();
			} else if (c.getCellType() == CellType.NUMERIC) {
				return String.valueOf(c.getNumericCellValue());
			}
			// Handle boolean or other cell types as necessary
			return "";
		}).orElse("");
	}

	private int getCellIntegerValue(Cell cell) {
		return Optional.ofNullable(cell).map(c -> {
			if (c.getCellType() == CellType.NUMERIC) {
				return (int) c.getNumericCellValue();
			}
			// If it's a string and you know it's an integer like "2019", you could parse it
			// Be careful with exceptions that might be thrown here
			return 0;
		}).orElse(0);
	}




	private void deleteCustomer(Scanner scanner) {
        System.out.print("Enter the ID of the customer to delete: ");
        Long customerId = Long.parseLong(scanner.nextLine());
        customerService.deleteCustomer(customerId);
    }

	private void addNewCustomer(Scanner scanner) {
		// Collect customer information from the user
		System.out.print("Enter customer name: ");
		String name = scanner.nextLine();

		System.out.print("Enter customer phone: ");
		String phone = scanner.nextLine();

		System.out.print("Enter customer email: ");
		String email = scanner.nextLine();

		System.out.print("Enter customer address: ");
		String address = scanner.nextLine();

		// Create a new Customer object and populate it with the user input
		Customer customer = new Customer();
		customer.setName(name);
		customer.setPhone(phone);
		customer.setEmail(email);
		customer.setAddress(address);

		// Save the new customer using the CustomerService
		customerService.saveCustomer(customer);

		// Confirm the customer has been added
		System.out.println("Customer added successfully!");
	}

	private void searchForCustomer(Scanner scanner) {
		// Prompt the user for a search query
		System.out.print("Enter search query (name or phone): ");
		String query = scanner.nextLine();

		// Use the CustomerService to search for customers based on the query
		List<Customer> customers = customerService.searchCustomers(query);
		if (customers.isEmpty()) {
			System.out.println("No customers found.");
		} else {
			// Display the details of each customer found
			System.out.println("Found customers:");
			for (Customer customer : customers) {
				System.out.println("ID: " + customer.getCustomerID() + ", Name: " + customer.getName() + ", Phone: " + customer.getPhone()
						+ ", Email: " + customer.getEmail() + ", Address: " + customer.getAddress());
				// Print other customer details if necessary
			}
		}
	}


    // Other methods for vehicles and repairs...
}
