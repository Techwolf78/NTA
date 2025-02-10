import React from 'react';
import { Container, Row, Col, Table, Card, ListGroup } from 'react-bootstrap';
import { FaUniversity, FaCreditCard, FaMoneyCheckAlt, FaInfoCircle } from 'react-icons/fa';
import Footer from "../Footer/Footer";
import './Registration.css';

export default function Registration() {
    return (
        <div className="registration-wrapper">
            <Container className="py-5">
                <Row className="mb-5">
                    <Col xs={12} className="text-center">
                        <h1 className="display-4 fw-bold text-primary mb-4">
                            <FaUniversity className="me-2" />
                            Conference Registration
                        </h1>
                        <p className="lead text-muted max-width-800 mx-auto">
                            All participants must complete registration. At least one author per paper must register.
                            Choose your preferred participation method below.
                        </p>
                    </Col>
                </Row>

                {/* Payment Section */}
                <Row className="g-4 justify-content-center mb-5">
                    <Col xl={8} lg={10}>
                        <Card className="shadow-lg border-0">
                            <Card.Header className="bg-primary text-white py-3">
                                <h2 className="h4 mb-0">
                                    <FaMoneyCheckAlt className="me-2" />
                                    Payment Details
                                </h2>
                            </Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex align-items-center">
                                    <FaCreditCard className="text-primary me-3 fs-4" />
                                    <div>
                                        <h3 className="h6 mb-1">Bank Transfer</h3>
                                        <div className="text-muted small">INDIRA COLLEGE OF ENGINEERING & MANAGEMENT</div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <DetailItem label="Bank" value="INDUSIND BANK LTD" />
                                    <DetailItem label="Branch" value="Wakad, Pune" />
                                    <DetailItem label="Account Number" value="201025452641" />
                                    <DetailItem label="IFSC Code" value="INDB0000999" />
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>

                {/* Pricing Table */}
                <Row className="mb-5">
                    <Col xs={12}>
                        <h2 className="text-center mb-4 display-6 fw-bold text-primary">
                            Registration Fees
                        </h2>
                        <div className="table-responsive">
                            <Table className="table-hover align-middle">
                                <thead className="table-primary">
                                    <tr>
                                        <th>Category</th>
                                        <th className="text-end">Indian (₹)</th>
                                        <th className="text-end">Foreign ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feeData.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.category}</td>
                                            <td className="text-end">₹{item.inr}</td>
                                            <td className="text-end">${item.usd}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>

                {/* Additional Info */}
                <Row className="g-4">
                    <Col md={6}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <h3 className="h5 mb-3 text-primary">
                                    <FaInfoCircle className="me-2" />
                                    Inclusions
                                </h3>
                                <ul className="list-unstyled">
                                    <ListItem>Access to all sessions</ListItem>
                                    <ListItem>Conference materials kit</ListItem>
                                    <ListItem>Daily lunch & refreshments</ListItem>
                                    <ListItem>Participation certificate</ListItem>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                    <Col md={6}>
                        <Card className="h-100 shadow-sm">
                            <Card.Body>
                                <h3 className="h5 mb-3 text-primary">
                                    <FaInfoCircle className="me-2" />
                                    Important Notes
                                </h3>
                                <ul className="list-unstyled">
                                    <ListItem>* Scopus/WoS publication fees extra</ListItem>
                                    <ListItem>* Non-refundable registration</ListItem>
                                    <ListItem>* GST included in all prices</ListItem>
                                    <ListItem>* Valid ID required for students</ListItem>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

// Helper components
const DetailItem = ({ label, value }) => (
    <div className="d-flex justify-content-between py-2">
        <span className="text-muted">{label}:</span>
        <span className="fw-semibold">{value}</span>
    </div>
);

const ListItem = ({ children }) => (
    <li className="d-flex align-items-center mb-2">
        <span className="badge bg-primary me-2">✓</span>
        {children}
    </li>
);

// Data for table
const feeData = [
    { category: 'Student Paper', inr: '4,000', usd: '50' },
    { category: 'Research Scholar Paper', inr: '5,000', usd: '65' },
    { category: 'Industry Professional Paper', inr: '6,000', usd: '75' },
    { category: 'Co-Author Registration', inr: '2,000', usd: '30' },
    { category: 'Conference Attendee', inr: '2,000', usd: '30' },
    { category: 'Pre-conference Workshop', inr: '600', usd: '15' },
    { category: 'Poster Presentation', inr: '600', usd: '15' },
];