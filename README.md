# JAVA and React Project

## Run Project
- On docker-compose.yml file run services:
- Java application will serve on: http://localhost:8080/api/products
- React application will serve on: http://localhost:3000/
- Login with:
  - Username: admin
  - Password: admin123

#### ---------------------------------------------------------------------------------------------

### Entity class
#### Product:
- Id (Primary Key, Auto-generated)
- Name
- Price
- Description

#### Lombok
- Use of Lombok library to automatically generate Getter, Setter, HashCode, ToString, etc. methods

### Repository Layer
- ProductRepository extends JPARepository interface provided by Spring Data JPA, that enables to use built-in methods
  for interacting with the database.
- @Repository annotation -> to indicate that this class is a repository and should be managed by the Spring container

### Service Layer
- Use of Dependency injection to be able to use Repository methods
- @Service annotation -> to indicate class as a service provider and part of business logic layer

### Controller Layer
- @RestController annotation -> to indicate this class will support HTTP requests

### Custom Exceptions
- ProductNotFoundException -> to handle and throw exception errors

## Database
#### H2 DB
- Url to access database: http://localhost:8080/h2-console

## Requests
#### POST
{
"name": "product1",
"description": "First product",
"price": 12.3
}