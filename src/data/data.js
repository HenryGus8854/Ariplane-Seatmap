export const SEGMENTS =  [
    {
      "segmentKey": "n8D0b+BAAA/BDZkAZOAAAA==",
      "departure": {
        "airport": "DEN",
        "datetime": "2020-02-05T19:52:00-07:00",
        "date": "Feb 5",
        "time": "7:52",
        "period": "pm",
        "DOW": "Wed"
      },
      "arrival": {
        "airport": "SEA",
        "datetime": "2020-02-05T21:59:00-08:00",
        "date": "Feb 5",
        "time": "9:59",
        "period": "pm",
        "DOW": "Wed"
      },
      "flightNumber": "DL2867"
    },
    {
      "segmentKey": "n8D0b+BAAA/BYbkAZOAAAA==",
      "departure": {
        "airport": "SEA",
        "datetime": "2020-02-05T22:52:00-08:00",
        "date": "Feb 5",
        "time": "10:52",
        "period": "pm",
        "DOW": "Wed"
      },
      "arrival": {
        "airport": "YVR",
        "datetime": "2020-02-05T23:59:00-08:00",
        "date": "Feb 5",
        "time": "11:59",
        "period": "pm",
        "DOW": "Wed"
      },
      "flightNumber": "DL3527"
    }
  ]
  
  export const SEATMAPS = [
    {
      "segmentKey": "jZjaQSWfTkE=",
      "seatmap": {
        "carrier": {
          "name": "Delta Air Lines",
          "shortName": "Delta",
          "code": "DL"
        },
        "segment": {
          "Key": "n8D0b+BAAA/BDZkAZOAAAA==",
          "Group": "0",
          "Carrier": "DL",
          "CabinClass": "Business",
          "FlightNumber": "2867",
          "ProviderCode": "ACH",
          "Origin": "DEN",
          "Destination": "SEA",
          "DepartureTime": "2020-02-05T19:52:00.000-07:00",
          "ArrivalTime": "2020-02-05T21:59:00.000-08:00",
          "FlightTime": "187",
          "Distance": "1017",
          "ClassOfService": "J",
          "ETicketability": "Yes",
          "Equipment": "319",
          "Status": "NN",
          "ChangeOfPlane": "false",
          "SupplierCode": "DL",
          "OptionalServicesIndicator": "false",
          "ParticipantLevel": "Secure Sell",
          "LinkAvailability": "true",
          "PolledAvailabilityOption": "Cached status used. Polled avail exists"
        },
        "aircraftType": "Airbus A319",
        "traveler": {
          "firstName": "Max",
          "lastName": "Power"
        },
        "details": {
          "inFlightServices": [
            {
              "name": "Wi-Fi",
              "icon": "icon-wifi"
            },
            {
              "name": "Non-Smoking",
              "icon": "icon-non-smoking"
            }
          ]
        },
        "sections": [
          {
            "classOfService": "J",
            "label": "First",
            "rows": [
              {
                "number": "",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "toilet",
                    "code": "1000-A",
                    "characteristics": [
                      "toilet"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "toilet",
                    "code": "1000-B",
                    "characteristics": [
                      "toilet",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "galley",
                    "code": "1000-C",
                    "characteristics": [
                      "galley",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "galley",
                    "code": "1000-D",
                    "characteristics": [
                      "galley"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "none",
                    "code": "1001-A",
                    "characteristics": [
                      "noSeatAtThisLocation"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "none",
                    "code": "1001-B",
                    "characteristics": [
                      "noSeatAtThisLocation",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "none",
                    "code": "1001-C",
                    "characteristics": [
                      "noSeatAtThisLocation",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "none",
                    "code": "1001-D",
                    "characteristics": [
                      "noSeatAtThisLocation"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "exitLeft",
                  "exitRight"
                ]
              },
              {
                "number": "",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "1002-A",
                    "characteristics": [
                      "closet"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "1002-B",
                    "characteristics": [
                      "closet",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "galley",
                    "code": "1002-C",
                    "characteristics": [
                      "galley",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "galley",
                    "code": "1002-D",
                    "characteristics": [
                      "galley"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "1",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "1-A",
                    "characteristics": [
                      "window",
                      "bulkhead"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "1-B",
                    "characteristics": [
                      "bulkhead",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "1-C",
                    "characteristics": [
                      "bulkhead",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "1-D",
                    "characteristics": [
                      "window",
                      "bulkhead"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "2",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "2-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "2-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "2-C",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "2-D",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "3",
                "travelerRef": "xPD0b+BAAA/B8WtLZOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "3-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "3-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "3-C",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "3-D",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              }
            ]
          },
          {
            "classOfService": "W",
            "label": "PremiumEconomy",
            "rows": [
              {
                "number": "10",
                "travelerRef": "7zu5b+cc1BKAZXy4UOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "10-A",
                    "characteristics": [
                      "bulkhead",
                      "window"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "10-B",
                    "characteristics": [
                      "bulkhead"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "10-C",
                    "characteristics": [
                      "bulkhead",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "10-D",
                    "characteristics": [
                      "bulkhead",
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "10-E",
                    "characteristics": [
                      "bulkhead"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "10-F",
                    "characteristics": [
                      "bulkhead",
                      "window"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "11",
                "travelerRef": "7zu5b+cc1BKAZXy4UOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "11-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "11-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "11-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "11-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "11-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "11-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "12",
                "travelerRef": "7zu5b+cc1BKAZXy4UOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "12-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "12-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "12-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "12-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "12-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "blocked"
                  },
                  {
                    "type": "seat",
                    "code": "12-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "blocked"
                  }
                ],
                "characteristics": [
                  "overwingRow"
                ]
              }
            ]
          },
          {
            "classOfService": "T",
            "label": "Economy",
            "rows": [
              {
                "number": "13",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "13-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "13-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "13-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "13-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "13-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "13-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  }
                ],
                "characteristics": [
                  "overwingRow"
                ]
              },
              {
                "number": "14",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "14-A",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "14-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "14-C",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "reserved",
                    "readOnly": true
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "14-D",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "14-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "14-F",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  }
                ],
                "characteristics": [
                  "overwingRow",
                  "preferredRowPreferentialRow"
                ]
              },
              {
                "number": "15",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "15-A",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 38.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "15-B",
                    "characteristics": [
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 38.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "15-C",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 38.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "15-D",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 38.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "15-E",
                    "characteristics": [
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 38.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "15-F",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "reserved",
                    "readOnly": true
                  }
                ],
                "characteristics": [
                  "overwingRow",
                  "exitLeft",
                  "exitRight",
                  "preferredRowPreferentialRow"
                ]
              },
              {
                "number": "16",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "16-A",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "16-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "16-C",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "16-D",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "16-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "16-F",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  }
                ],
                "characteristics": [
                  "overwingRow",
                  "preferredRowPreferentialRow"
                ]
              },
              {
                "number": "17",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "17-A",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "17-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "17-C",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "17-D",
                    "characteristics": [
                      "aisle",
                      "preferential"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  },
                  {
                    "type": "seat",
                    "code": "17-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "17-F",
                    "characteristics": [
                      "preferential",
                      "window"
                    ],
                    "preferred": true,
                    "availability": "available",
                    "paidSeat": true,
                    "price": {
                      "total": 24.99,
                      "currency": "USD"
                    },
                    "readOnly": true
                  }
                ],
                "characteristics": [
                  "overwingRow",
                  "preferredRowPreferentialRow"
                ]
              },
              {
                "number": "18",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "18-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "18-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "18-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "18-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "18-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "18-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  }
                ],
                "characteristics": [
                  "overwingRow"
                ]
              },
              {
                "number": "19",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "19-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "19-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "19-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "19-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "19-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "19-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "overwingRow"
                ]
              },
              {
                "number": "20",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "20-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "20-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "20-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "20-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "20-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "20-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  }
                ],
                "characteristics": [
                  "overwingRow"
                ]
              },
              {
                "number": "21",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "21-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "21-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "21-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "21-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "21-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "21-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "22",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "22-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "22-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "22-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "22-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "22-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "22-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "23",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "23-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "23-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "23-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "23-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "seat",
                    "code": "23-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "23-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "24",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "24-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "24-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "24-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "24-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "24-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "24-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "25",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "25-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "25-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "25-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "reserved"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "25-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "25-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "25-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "26",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "26-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "26-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "26-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "26-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "26-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "26-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "reserved"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "27",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "27-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "27-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "27-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "27-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "27-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "available"
                  },
                  {
                    "type": "seat",
                    "code": "27-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "available"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "28",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "28-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "28-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "28-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "28-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "28-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "28-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "protected"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "29",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "seat",
                    "code": "29-A",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "29-B",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "29-C",
                    "characteristics": [
                      "aisle",
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "seat",
                    "code": "29-D",
                    "characteristics": [
                      "aisle"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "29-E",
                    "characteristics": [
                      "noFacilitySeatIndifferentSeat"
                    ],
                    "availability": "protected"
                  },
                  {
                    "type": "seat",
                    "code": "29-F",
                    "characteristics": [
                      "window"
                    ],
                    "availability": "protected"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              },
              {
                "number": "",
                "travelerRef": "wwMyb+BAAA/BmFHlaOAAAA==",
                "elements": [
                  {
                    "type": "galley",
                    "code": "1000-A",
                    "characteristics": [
                      "galley"
                    ],
                    "availability": "noseat"
                  },
                  {
                    "type": "galley",
                    "code": "1000-B",
                    "characteristics": [
                      "galley"
                    ],
                    "availability": "noseat"
                  },
                  {
                    "type": "galley",
                    "code": "1000-C",
                    "characteristics": [
                      "aisle",
                      "galley"
                    ],
                    "availability": "noseat"
                  },
                  {
                    "type": "aisle"
                  },
                  {
                    "type": "toilet",
                    "code": "1000-D",
                    "characteristics": [
                      "aisle",
                      "toilet"
                    ],
                    "availability": "noseat"
                  },
                  {
                    "type": "toilet",
                    "code": "1000-E",
                    "characteristics": [
                      "toilet"
                    ],
                    "availability": "noseat"
                  },
                  {
                    "type": "toilet",
                    "code": "1000-F",
                    "characteristics": [
                      "toilet"
                    ],
                    "availability": "noseat"
                  }
                ],
                "characteristics": [
                  "indifferenctRow"
                ]
              }
            ]
          }
        ],
        "isFull": false
      }
    }
  ]
  export default {
    SEGMENTS, SEATMAPS
  };