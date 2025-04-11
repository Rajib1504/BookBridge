import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto  px-6 md:px-16 lg:px-2 my-20 font-Inter">
      <h1 className="text-3xl font-bold mb-6 font-Gilda">About bookBridge</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-Gilda">Our Mission</h2>
        <p className="text-justify">
          At <strong>bookBridge</strong>, we believe that books should be
          shared, not stored. Our mission is to make reading more accessible,
          affordable, and sustainable by offering a seamless platform for
          renting, exchanging, and discovering books. Whether you’re a student,
          a book lover, or someone just looking for a new read,{" "}
          <strong>bookBridge</strong> is here to connect you with the books you
          love while making it easier to pass them on for others to enjoy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-Gilda">
          What is bookBridge?
        </h2>
        <p className="text-justify">
          <strong>bookBridge</strong> is an online community-driven platform
          that allows users to rent and exchange books with other readers. We
          aim to reduce the cost of acquiring new books, promote the circular
          economy, and give books a second life. Through{" "}
          <strong>bookBridge</strong>, you can borrow your favorite books for a
          fraction of the price or exchange them for something new to keep your
          reading journey exciting and budget-friendly.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-Gilda">How It Works</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-justify">
            <strong>Browse Books:</strong> Explore a wide variety of books from
            multiple genres that are available for rent or exchange.
          </li>
          <li className="text-justify">
            <strong>Rent or Exchange:</strong> Choose whether you want to rent a
            book for a specified time or exchange your book with other members
            in the community.
          </li>
          <li className="text-justify">
            <strong>Share Your Books:</strong> Contribute your own books to the
            platform, letting others enjoy what you’ve read. You can list them
            for rent or for exchange.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-Gilda">
          Why bookBridge?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-justify">
            <strong>Affordable:</strong> Renting or exchanging books is a
            cost-effective way to enjoy literature without committing to
            full-price purchases.
          </li>
          <li className="text-justify">
            <strong>Sustainable:</strong> By sharing books, we contribute to a
            more eco-friendly world, reducing waste and giving books a longer
            life.
          </li>
          <li className="text-justify">
            <strong>Community-Driven:</strong> Join a passionate community of
            readers and share your love for books with others.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 font-Gilda">Our Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-justify">
            <strong>Accessibility:</strong> Everyone deserves the opportunity to
            read and learn, and we aim to make books accessible to all.
          </li>
          <li className="text-justify">
            <strong>Collaboration:</strong> We believe in the power of sharing
            knowledge and experiences through books.
          </li>
          <li className="text-justify">
            <strong>Sustainability:</strong> We are committed to creating a
            circular economy for books, reducing their environmental impact.
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <p className="text-justify">
          <strong>Join Us Today</strong> Become part of our growing community of
          book lovers and start borrowing, renting, or exchanging books today!
          Together, let’s bridge the gap between readers and their next great
          book.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
