import Link from "next/link";

export default function TeamCard({ member }) {
  return (
    <article className="team-card">
      <Link href={`/team/${member.slug}`} className="team-photo">
        <img src={member.img} alt={member.name} />
      </Link>
      <h4>
        <Link href={`/team/${member.slug}`}>{member.name}</Link>
      </h4>
      <p>{member.role}</p>
    </article>
  );
}
