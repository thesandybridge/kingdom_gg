import styles from "./Header.module.css";
import Games from "./GamesComponent/Games";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Breadcrumbs from "nextjs-breadcrumbs";
import useClickOutside from "../../utils/useClickOutside";

type HeaderProps = {
  position?: "absolute" | "relative" | "static" | "sticky";
  breadcrumbs?: boolean;
};

const Profile = () => {
  const { data } = useSession();

  if (!data) {
    return null;
  }
  return (
    <div className={styles.popup}>
      <div className={styles.popupInnerWrapper}>
        <div className={styles.triangle}>
          <svg height="12" viewBox="0 0 24 12" width="24">
            <path
              d="M20 12l-8-8-12 12"
              fill="var(--charcoal)"
              fillRule="evenodd"
              stroke="var(--gold)"
              strokeWidth="1px"
            ></path>
          </svg>
        </div>
        <div className={styles.profileMenu}>
          <div className={styles.userInfo}>
            <Link className={styles.userTitle} href={`user/${data.user?.id}`}>
              {data.user?.name}
            </Link>
          </div>
          <button className={styles.logout} onClick={() => signOut()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();

  const popup = useRef<any>(null);
  useClickOutside(popup, () => setIsOpen(false));
  if (!data) {
    return (
      <button className={styles.login} onClick={() => signIn("discord")}>
        Login
      </button>
    );
  }
  return (
    <div className={styles.user} ref={popup}>
      <button
        className={styles.popupTrigger}
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {data.user?.image && (
          <Image
            src={data.user?.image}
            alt="avatar"
            width={32}
            height={32}
            objectFit="cover"
            title={`Logout ${data.user?.name}`}
          />
        )}
      </button>
      <div className={styles.popupWrapper} aria-hidden={!isOpen} role="menu">
        {isOpen && <Profile />}
      </div>
    </div>
  );
};

const Header = (props: HeaderProps) => {
  const { position, breadcrumbs } = props;

  return (
    <>
      <header
        className={styles.kingHeader}
        style={{ position: position ? position : "fixed" }}
      >
        <div className={styles.innerHeader}>
          <div className={styles.king}>
            <a
              className="linked-svg"
              href="https://discord.gg/F3gkmGw"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Join the Discord"
            >
              <svg
                aria-label="Kingdom Logo"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.logo}
                width="48.36"
                height="48.36"
                viewBox="0 0 48.36 48.36"
              >
                <circle cx="24.18" cy="24.18" r="24.18" />
                <path
                  className={styles.lionPaths}
                  d="M31.26,20.46l-1.84,1.2S31.26,23,31.26,20.46Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M39.41,23.78C39.14,22.76,41,21,41,21l2.22,4.72c-.58-6.72-3.33-8.84-3.33-8.84l2,.32C40.19,13.71,38,12.56,36,12.33l-.62,1.2a8.7,8.7,0,0,1,3,2.65l-2,.31c2.63,1.26,2.69,2.89,2,4.08S35.54,23.5,37,27.06s.37,5.66.37,5.66c-1.26-5-3.62-4.56-3.62-4.56,3,5.72-2.9,12.17-2.9,12.17,4-1.66,5.67-6.25,5.67-6.25.88,2.24-1,5.15-1,5.15,6.18-6.3,2.8-12.72,2.8-12.72,2-.32,2.07,2.9,2.07,2.9a3.58,3.58,0,0,0,.68-3.53C40.73,25.21,39.68,24.79,39.41,23.78Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M7.82,17.17l2-.32S7,19,6.45,25.69L8.67,21s1.83,1.79,1.56,2.81-1.32,1.43-1.63,2.1a3.55,3.55,0,0,0,.67,3.53s0-3.22,2.07-2.9c0,0-3.38,6.42,2.8,12.72,0,0-1.88-2.91-1-5.15,0,0,1.69,4.59,5.67,6.25,0,0-5.87-6.45-2.9-12.17,0,0-2.36-.49-3.61,4.56,0,0-1.09-2.11.36-5.66s-.71-5.3-1.41-6.49-.64-2.82,2-4.08l-2-.31a8.81,8.81,0,0,1,3-2.65l-.62-1.2C11.68,12.56,9.46,13.71,7.82,17.17Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M18.3,35s-.67,3.13,1.58,4.45,3.69,2.17,3.75,4.19c0,0,.66-2.63-.81-4s-1.93-1.31-2.17-3.32a2.91,2.91,0,0,0-.4,2.2A5.8,5.8,0,0,1,18.3,35Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M34.16,15.66c.17.3-4,1.73-4.45,1.82a22.6,22.6,0,0,1-5.11.5,19.49,19.49,0,0,1-5.89-.81,21.17,21.17,0,0,1-3.23-1.51,10.09,10.09,0,0,0-.59,1.24,6.15,6.15,0,0,0-.32,4.28,4.16,4.16,0,0,0,1.53,2,4.35,4.35,0,0,1,1.57,2.2,4.25,4.25,0,0,1,.06,2.32c-.12.5-.39.95-.5,1.46a2.93,2.93,0,0,0,.26,1.95A2.76,2.76,0,0,0,20,32.41,5.88,5.88,0,0,0,22.17,32a10.13,10.13,0,0,0,1.29-.61c.11-.06.83-.56,1.18-.77-.8-.36-3.89-1.9-2.85-3.45a6.28,6.28,0,0,0,3,1.14,6.28,6.28,0,0,0,3-1.14c1,1.57-2.13,3.13-2.88,3.46,1.63,1.13,4.05,2.47,6,1.56A2.56,2.56,0,0,0,32.47,30a3.32,3.32,0,0,0-.26-1.46,4.56,4.56,0,0,1-.29-3,4.15,4.15,0,0,1,1.3-2,5.23,5.23,0,0,1,.56-.48C36.08,21.16,35.42,17.9,34.16,15.66ZM21.93,23a3.31,3.31,0,0,1-1.75.86l.88-1.1a8,8,0,0,1-2.6-.17c-1.68-.43-1.14-1.5-1.64-2.17s-1.77-.28-1.77-.28a4.42,4.42,0,0,1,3.42-.77c.6.15,1.67,1.87,3,1.86s1.15-.12,1.15-.12A3.51,3.51,0,0,1,21.93,23Zm10.89-2.58c-.5.67,0,1.74-1.64,2.17a8,8,0,0,1-2.6.17l.89,1.1A3.33,3.33,0,0,1,27.71,23a3.51,3.51,0,0,1-.64-1.89s0,.12,1.15.12,2.35-1.71,3-1.86a4.41,4.41,0,0,1,3.42.77S33.27,19.79,32.82,20.38Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M20.22,21.66l-1.84-1.2C18.39,23,20.22,21.66,20.22,21.66Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M31.35,35s.66,3.13-1.59,4.45S26.07,41.63,26,43.65c0,0-.66-2.63.81-4s1.93-1.31,2.18-3.32a2.92,2.92,0,0,1,.39,2.2A5.84,5.84,0,0,0,31.35,35Z"
                  transform="translate(-0.64 -0.64)"
                />
                <polygon
                  className={styles.lionPaths}
                  points="27.87 32.67 27.87 34.99 24.18 36.53 20.49 34.99 20.49 32.67 24.18 30.93 27.87 32.67"
                />
                <path
                  className={styles.lionPaths}
                  d="M36.31,8.6a1,1,0,0,0-1,1,1,1,0,0,0,.12.48c-7.86,8.77-9.7.43-10.08-2.3A1,1,0,0,0,25.78,7a1,1,0,1,0-1.51.82c-.39,2.75-2.24,11-10.06,2.29a1,1,0,0,0,.14-.5,1,1,0,1,0-1,1l.19,0L15.8,14.9a16.38,16.38,0,0,0,9,2.19,16.14,16.14,0,0,0,9-2.19l2.25-4.36.22,0a1,1,0,1,0,0-2Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M31.49,9.58a.82.82,0,1,0-1.63,0,.79.79,0,0,0,.19.52l-1.54,2.74a1.85,1.85,0,0,0,1,.31,2.66,2.66,0,0,0,.89-.16L31,10.34A.8.8,0,0,0,31.49,9.58Z"
                  transform="translate(-0.64 -0.64)"
                />
                <path
                  className={styles.lionPaths}
                  d="M19.57,10.07a.79.79,0,0,0,.17-.49.82.82,0,1,0-1.06.78L19.2,13a2.71,2.71,0,0,0,.89.16,1.85,1.85,0,0,0,1-.31Z"
                  transform="translate(-0.64 -0.64)"
                />
              </svg>
            </a>
          </div>
          <div className={styles.utils}>
            <Games />
            <User />
          </div>
        </div>
      </header>

      {position && breadcrumbs && (
        <Breadcrumbs useDefaultStyle={false} containerClassName="breadcrumbs" />
      )}
    </>
  );
};

export default Header;
