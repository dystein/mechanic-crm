package com.mechanicshop.crm;

import com.mechanicshop.crm.model.Customer;
import com.mechanicshop.crm.service.CustomerService;
import com.mechanicshop.crm.service.RepairService;
import com.mechanicshop.crm.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;
import java.util.Scanner;

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
		// Placeholder for repair-related operations
		// TODO: Implement repair operations
	}

	private void handleVehicles(Scanner scanner) {
		// Placeholder for vehicle-related operations
		// TODO: Implement vehicle operations
	}

	private void handleCustomers(Scanner scanner) {
		// Customer operations menu
		System.out.println("\nCustomer Operations:");
		System.out.println("1. Add new customer");
		System.out.println("2. Search for customer");
		System.out.println("3. Return to main menu");
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
			default:
				System.out.println("Invalid choice. Please try again.");
		}
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
