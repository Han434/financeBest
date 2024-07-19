CREATE DATABASE financeBest;

use financeBest;

drop table if exists userCompany, user, company, purchaseOrder, purchaseOrderItem, supplier, product, manufacturer, orderTable, payment, orderItem;

create table user (
    userId int,
    userName varchar(100),
    firstName varchar(50),
    lastName varchar(50),
    email varchar(100),
    password varchar(100),
    dateOfBirth date,
    CONSTRAINT PK_USER PRIMARY KEY (userId)
);

INSERT INTO user (userId, userName, firstName, lastName, email, password, dateOfBirth)
VALUES (2, 'Stavanger', 'Norway', 'Han', 'sample email', 'password', '2008-11-11');

create table company (
    companyId int,
    companyName varchar(100),
    companyDescription varchar(250),
    companyType varchar(100),
    CONSTRAINT PK_COMPANY PRIMARY KEY (companyId)
);

create table userCompany (
    userId int,
    companyId int,
    userType varchar(100),
    joinInDate date,
    readAccess boolean,
    writeAccess boolean,
    CONSTRAINT PK_USER_TEAM PRIMARY KEY (userId, companyId),
    FOREIGN KEY (userId) REFERENCES user(userId),
    FOREIGN KEY (companyId) REFERENCES company(companyId)
);

create table purchaseOrder (
    purchaseOrderId int,
    supplierId int,
    companyId int,
    orderDate date,
    total float,
    internalNote varchar(500),
    customerNote varchar(500),
    CONSTRAINT PK_PURCHASEORDER_SUPPLIER PRIMARY KEY (purchaseOrderId),
    FOREIGN KEY (supplierId) REFERENCES supplier(supplierId)
);

create table purchaseOrderItem (
    purchaseOrderItemId int,
    purchaseOrderId int,
    productId int,
    quantity int,
    unitPrice float,
    CONSTRAINT PK_PURCHASE_ORDER_ITEM PRIMARY KEY (purchaseOrderItemId),
    FOREIGN KEY (purchaseOrderId) REFERENCES purchaseOrder(purchaseOrderId)
);

create table supplier (
    supplierId int,
    supplierName varchar(100),
    supplierEmail varchar(100),
    supplierPhone varchar(50),
    supplierAddress varchar(250),
    CONSTRAINT PK_SUPPLIER PRIMARY KEY (purchaseOrderItemId)
);

create table product (
    productId int,
    manufacturerId int,
    productDescription varchar(100),
    productType varchar(100),
    productCategory varchar(100),
    unitPrice float,
    salePrice float,
    internalNote varchar(500),
    ustomerNote varchar(500),
    barCode varchar(100),
    canBeSold boolean,
    CONSTRAINT PK_PRODUCT PRIMARY KEY (productId),
    FOREIGN KEY (manufacturerId) REFERENCES manufacturer(manufacturerId)
);

create table manufacturer (
    manufacturerId int,
    manufacturerName varchar(100),
    manufacturedDate date,
    manufacturerCountry varchar(100),
    CONSTRAINT PK_MANUFACTURER PRIMARY KEY (manufacturerId)
);

create table customer (
    customerId int,
    customerName varchar(50),
    customerNRC varchar(50),
    customerEmail varchar(100),
    phoneNumber varchar(50),
    customerAddress varchar(100),
    bankAccountNumber varchar(200),
    customerPoint int,
    CONSTRAINT PK_CUSTOMER PRIMARY KEY (customerId)
);

create table order (
    orderId int,
    customerId int,
    companyId int,
    orderDate date,
    total float,
    internalNote varchar(100),
    customerNote varchar(100),
    CONSTRAINT PK_ORDER PRIMARY KEY (orderId),
    FOREIGN KEY (customerId) REFERENCES customer(customerId),
    FOREIGN KEY (companyId) REFERENCES company(companyId)
);

create table payment (
    paymentId int,
    orderId int,
    paymentMethod,
    paymentAmount,
    CONSTRAINT PK_PAYMENT PRIMARY KEY (paymentId),
    FOREIGN KEY (orderId) REFERENCES order(orderId)
);

create table orderItem (
    orderItemId int,
    orderId int,
    productId int,
    quantity int,
    unitPrice float,
    CONSTRAINT PK_PAYMENT PRIMARY KEY (orderItemId),
    FOREIGN KEY (orderId) REFERENCES order(orderId),
    FOREIGN KEY (productId) REFERENCES product(productId)
);