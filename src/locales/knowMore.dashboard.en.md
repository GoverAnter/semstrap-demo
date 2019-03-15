## Introduction

This page represents a common dashboard, using dynamic pages and computed values bound to page elements using visual programming.

In this demo, these values are computed when page is rendered, but these are the kind of data that is usually aggregated and chached by a server. This also means that a user could use (and bind) fields that are NOT in a domain object.

## Technical side

This page can become completely dynamic if, in addition to data aggregation, back-end generates bindings. This could permit easy and inifinite schema evolution without the hassle of modifying (and building, deploying) the front-end project.
This page also shows bindings flexibility : the developer can add special/computed/server-rendered/API called data by just creating bindings, giving end-user the power to bind and use these values to compute something else.