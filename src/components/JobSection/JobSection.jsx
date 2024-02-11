'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";


export function JobSection() {

    const settings = {
        className: "center",
        dots: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        { "_id": { "$oid": "513197ed30040316a9393d2e" }, "company": { "companyId": 21836, "companyName": "CyberCoders" }, "jobTitle": "Ruby on Rails Engineer - PostgreSQL, MongoDB, Redis, HTML, CSS", "location": [-118.404471, 33.978622], "skills": ["mongodb"], "formattedAddress": "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" },
        { "_id": { "$oid": "513197ee30040316a9393d2f" }, "company": { "companyId": 0, "companyName": "Unicommerce eSolutions Pvt. Ltd. " }, "jobTitle": "Senior/Java Developer (Java/J2EE, Web services) ", "location": [77.31330199999999, 28.584569], "skills": ["java"], "formattedAddress": "Lower Ground Floor, B-85,, Sector 2, Noida, Uttar Pradesh, India" },
        { "_id": { "$oid": "513197f430040316a9393d30" }, "company": { "companyId": 488966, "companyName": "Inventum" }, "jobTitle": "Java Team Lead", "location": [77.410934, 28.5332598], "skills": ["java"], "formattedAddress": "Inventum Technologies Private Limited, C-70, Phase 2 Extension, NOIDA, Uttar Pradesh 201305, India" },
        { "_id": { "$oid": "513197f430040316a9393d31" }, "company": { "companyId": 4764, "companyName": "BlackRock" }, "jobTitle": "VP - Portfolio Mangement Tool(Java Technology)(Looking for only IIT,NIT,REC)", "location": [77.08594100000001, 28.51123], "skills": ["java"], "formattedAddress": "187, Phase I, Udyog Vihar, Gurgaon, Haryana, India, Udyog Vihar I, India" },
        { "_id": { "$oid": "513197f430040316a9393d32" }, "company": { "companyId": 32745, "companyName": "SapientNitro" }, "jobTitle": "Specialist Infrastructure – (Build and Release)", "location": [77.070722, 28.509578], "skills": ["must have"], "formattedAddress": "Unitech Infospace, Ground Floor, Tower A, Building 2, Sector 21, Dundahera, Gurgaon, Haryana, India" },
        { "_id": { "$oid": "513197f430040316a9393d33" }, "company": { "companyId": 103683, "companyName": "Burns Sheehan" }, "jobTitle": "Javascript Developer", "location": [-0.087268, 51.511592], "skills": ["node.js"], "formattedAddress": "75 King William Street, London, United Kingdom" },
        { "_id": { "$oid": "513197f430040316a9393d34" }, "company": { "companyId": 21836, "companyName": "CyberCoders" }, "jobTitle": "JavaScript Developer - JavaScript, Backbone.js, Node.js, HTML5", "location": [-96.79497600000001, 33.018308], "skills": ["node.js"], "formattedAddress": "Suite 400, 1400 Preston Road, Plano, TX, United States" },
        { "_id": { "$oid": "513197f430040316a9393d35" }, "company": { "companyId": 21836, "companyName": "CyberCoders" }, "jobTitle": "Ruby on Rails Engineer - PostgreSQL, MongoDB, Redis, HTML, CSS", "location": [-118.404471, 33.978622], "skills": ["mongodb"], "formattedAddress": "12181 W. Bluff Creek Dr. Suite 1E, Playa Vista, CA, United States" },
        { "_id": { "$oid": "513197f430040316a9393d36" }, "company": { "companyId": 0, "companyName": "Unicommerce eSolutions Pvt. Ltd. " }, "jobTitle": "Senior/Java Developer (Java/J2EE, Web services) ", "location": [77.31330199999999, 28.584569], "skills": ["java"], "formattedAddress": "Lower Ground Floor, B-85,, Sector 2, Noida, Uttar Pradesh, India" },
        { "_id": { "$oid": "513197f430040316a9393d37" }, "company": { "companyId": 488966, "companyName": "Inventum" }, "jobTitle": "Java Team Lead", "location": [77.410934, 28.5332598], "skills": ["java"], "formattedAddress": "Inventum Technologies Private Limited, C-70, Phase 2 Extension, NOIDA, Uttar Pradesh 201305, India" }
    ]

    return (
        <section className="bg-yellow-100 flex items-center justify-center py-8">
            <div className=" w-full mx-auto flex flex-col text-center content-center justify-center m-2 md:m-4 lg:m-8">
                <h1 className="text-center text-blue-950 text-2xl font-bold sm:text-3xl pb-8">
                    Jobs
                </h1>
                <section>
                    <section className="max-w-[1200px] mx-auto w-full rounded-xl relative overflow-hidden">
                        <Slider {...settings}>
                            {data.map(
                                (job, index) => (
                                    <div key={index} className="w-full m-1 p-1 flex lg:m-5 lg:p-5 ">
                                        <Card job={job} index={index} />
                                    </div>
                                )
                            )}
                        </Slider>
                    </section>
                </section>
            </div>
        </section>
    );
}
