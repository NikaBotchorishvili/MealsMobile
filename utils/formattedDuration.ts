import { intervalToDuration } from "date-fns";

/**
 * Returns a formatted duration string
 * @param duration - duration in minutes
 */
export const formatDuration = ({ duration }: { duration: number }): string => {
	const durationInMillis = duration * 60 * 1000;

	const { hours = 0, minutes = 0 } = intervalToDuration({
		start: 0,
		end: durationInMillis,
	});

	const formattedDuration = `${
		hours > 0 ? `${hours} hr${hours > 1 ? "s" : ""}` : ""
	} ${minutes > 0 ? `${minutes} min${minutes > 1 ? "s" : ""}` : ""}`.trim();
	return formattedDuration;
};
