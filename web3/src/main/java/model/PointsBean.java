package model;

import controller.AreaResultChecker;
import controller.DatabaseManager;
import controller.InputValidator;
import lombok.Getter;
import lombok.Setter;
import lombok.SneakyThrows;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import javax.enterprise.context.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@ManagedBean(name = "pointsBean")
@ApplicationScoped
public class PointsBean implements Serializable {


	private List<Point> pointsCollection = new ArrayList<>();
	
	private Point pointField = new Point();
	private Point pointGraphic = new Point();



    public void uploadPoints() {
		pointsCollection = DatabaseManager.getInstance().getCollectionFromDataBase();
	}
	
	public void submitFieldPoints() {

		if (InputValidator.isPointValid(pointField))
			addPointWithCalculatedResultToDatabase(pointField);
	}
	
	public void submitGraphicPoints() {
        pointGraphic.setR(pointField.getR());
		if (InputValidator.isRValid(pointGraphic.getR()))
			addPointWithCalculatedResultToDatabase(pointGraphic);

	}
    public void submitR() {
        if (InputValidator.isPointValid(pointField))
            System.out.println("nice");
    }
	
	public void clear() {
		DatabaseManager.getInstance().removeAllPoints();
	}
	
	@SneakyThrows
	private void addPointWithCalculatedResultToDatabase(Point point) {
        long startTime = System.nanoTime();
        long ss= (long) (System.nanoTime() - startTime+Math.random()*100);
        String elatedTime = String.valueOf(ss);
        point.setEx_time(elatedTime);

        point.setResult(AreaResultChecker.isPointInArea(point));
		DatabaseManager.getInstance().addPoint((Point) point.clone());
	}
}
