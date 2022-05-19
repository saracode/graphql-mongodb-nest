db.listingsAndReviews.aggregate([
    { $match: { bedrooms: { $gt: 1 } } },
    { $group: { _id: { bedrooms: "$bedrooms" }, totalRealBedBedRooms: { $sum: 1 }, avgBeds: { $avg: "$beds" } } },
    { $sort: { totalRealBedBedRooms: -1 } },
    { $project: { totalRealBedBedRooms: 1, avgBeds: { $round: ["$avgBeds"] } } }
]).pretty();


db.listingsAndReviews.aggregate([{
    $project: {
        _id: 0, address: 1, bedrooms: 1, beds: 1,
        location: {
            type: "Point",
            coordinates: [
                {
                    $convert: {
                        input: { $arrayElemAt: ["$address.location.coordinates", 0] },
                        to: "string",
                        onError: 0,
                        onNull: 0
                    }
                },
                { $arrayElemAt: ["$address.location.coordinates", 0] },
                { $arrayElemAt: ["$address.location.coordinates", 1] }
            ]
        }
    }
}]
).pretty()