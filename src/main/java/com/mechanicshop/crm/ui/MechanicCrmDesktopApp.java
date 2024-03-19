package com.mechanicshop.crm.ui;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class MechanicCrmDesktopApp extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {
        FXMLLoader loader = new FXMLLoader(getClass().getResource("/com/mechanicshop/crm/ui/main_view.fxml"));
        Scene scene = new Scene(loader.load());
        primaryStage.setScene(scene);
        primaryStage.setTitle("Mechanic CRM - Desktop");
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
