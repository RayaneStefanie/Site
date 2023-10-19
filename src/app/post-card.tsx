import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  shortText: string;
  date: string;
  imageUrl: string;
  slug: string;
};

export default function PostCard(props: Props) {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="flex flex-col gap-y-2">
        <div className="relative h-52">
          <Image
            src={props.imageUrl}
            alt={props.title}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p>{props.shortText}</p>
        <small className="text-zinc-400">
          {formatDate(new Date(props.date))}
        </small>
      </div>
    </Link>
  );
}
