import React, { useMemo, useRef } from "react";
import useOnClickOutside from "../hooks/useOnOutsideClick";

interface NavigationProps {
	open: boolean;
	handleClick: Function;
}

export type StringArray = Array<String>;

const Navigation = (props: NavigationProps) => {
	const classNames: StringArray = useMemo(() => {
		const classes: StringArray = ["navbar"];

		if (props.open) {
			classes.push("open");
		}

		return classes;
	}, [props.open]);

	const ref = useRef(null);

	const handleClickOutside = () => {
		if (props.open) {
			props.handleClick();
		}
	};

	useOnClickOutside(ref, handleClickOutside);

	return (
		<nav className={classNames.join(" ")} ref={ref}>
			<div>
				<ul className="navbar__list">
					<li>
						<a className="navbar__link navbar__link--sub" href="">
							Features
						</a>
						<ul className="navbar__sub">
							<li>
								<i className="icon icon--todo" />
								<a className="navbar__link" href="">
									Todo List
								</a>
							</li>
							<li>
								<i className="icon icon--calendar" />
								<a className="navbar__link" href="">
									Calendar
								</a>
							</li>
							<li>
								<i className="icon icon--reminders" />
								<a className="navbar__link" href="">
									Reminders
								</a>
							</li>
							<li>
								<i className="icon icon--planning" />
								<a className="navbar__link" href="">
									Planning
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="navbar__link navbar__link--sub" href="">
							Company
						</a>
						<ul className="navbar__sub">
							<li>
								<a className="navbar__link" href="">
									History
								</a>
							</li>
							<li>
								<a className="navbar__link" href="">
									Our Team
								</a>
							</li>
							<li>
								<a className="navbar__link" href="">
									Blog
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a className="navbar__link" href="">
							Careers
						</a>
					</li>
					<li>
						<a className="navbar__link" href="">
							About
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
