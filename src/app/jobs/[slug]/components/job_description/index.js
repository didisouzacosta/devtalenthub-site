import Card from "@/app/components/card";

export default function JobDescription({ params }) {
    return (
        <Card>
            <h1>Job: {params.slug}</h1>
            <h3>Job description</h3>
        </Card>
    )
}