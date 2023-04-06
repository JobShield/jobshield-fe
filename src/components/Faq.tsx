import { Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import FaqItem from "./FaqItem";

const FAQ: React.FC = () => {
  return (
    <Container p={{ base: 4, md: 8 }} mt={{ base: 8, md: 16 }}>
      <VStack spacing={4}>
        <Heading mb={4}>Frequently Asked Questions</Heading>
        <FaqItem question="What is online recruitment fraud and why does it matter?">
          Online recruitment fraud refers to scams where individuals or
          organizations create fake job advertisements, impersonate real
          companies, or otherwise deceive job seekers in an attempt to extract
          personal information or money. These scams can lead to identity theft,
          financial loss, and a waste of time and effort for job seekers. It
          matters because it undermines trust in the online job market and can
          cause significant harm to individuals looking for employment
          opportunities.
        </FaqItem>
        <FaqItem question="What is online recruitment fraud and why does it matter?">
          Online recruitment fraud refers to scams where individuals or
          organizations create fake job advertisements, impersonate real
          companies, or otherwise deceive job seekers in an attempt to extract
          personal information or money. These scams can lead to identity theft,
          financial loss, and a waste of time and effort for job seekers. It
          matters because it undermines trust in the online job market and can
          cause significant harm to individuals looking for employment
          opportunities.
        </FaqItem>
        <FaqItem question="What is the EMSCAD and how was it made?">
          The EMSCAD, or Employment Scam Agean Dataset, is a collection of job
          advertisements used to identify fraudulent job postings. It consists
          of both legitimate and fraudulent job entries, with the latter being
          predominantly online recruitment scams. The dataset was created by
          collecting job advertisements from various online sources and manually
          annotating them as either legitimate or fraudulent. This manual
          annotation process involved researchers carefully examining each job
          entry to determine its authenticity.
        </FaqItem>
        <FaqItem question="What does it mean to have a machine learning model trained on EMSCAD?">
          A machine learning model trained on EMSCAD has learned to identify
          patterns and characteristics that distinguish fraudulent job postings
          from legitimate ones. By analyzing the dataset and learning from the
          annotated examples, the model can then predict whether a new, unseen
          job advertisement is likely to be a scam or not. This helps in
          automating the process of detecting online recruitment fraud and
          protecting job seekers from scams.
        </FaqItem>
        <FaqItem question="Why are some legit job entries marked as fraudulent and vice versa?">
          Machine learning models are not perfect and can sometimes make
          mistakes. There may be instances where a legitimate job posting has
          features that the model associates with fraudulent jobs or when a scam
          job advert resembles a genuine one. These false positives and false
          negatives can occur due to several factors, such as the model's
          limitations, the quality of the training data, or the complexity of
          the problem itself.
        </FaqItem>
        // TODO: Fill in
        <FaqItem question="What are the precision, recall, and f1 scores of your model?">
          The precision, recall, and f1 scores are metrics used to evaluate the
          performance of a machine learning model in classification tasks such
          as identifying fraudulent job postings. Precision measures the
          proportion of true positives out of all positive predictions, recall
          measures the proportion of true positives out of all actual positives,
          and the f1 score is a harmonic mean of precision and recall. These
          scores may vary depending on the specific model used and the dataset
          it was trained on. For our webapp, the exact scores can be found in
          the "Model Performance" section.
        </FaqItem>
        <FaqItem question="How can I do what you've done? / How did you do it?">
          To create a similar webapp, you will need to follow these steps:
          <br />
          <br />
          <ol>
            <li>
              Obtain a dataset: Collect a dataset containing legitimate and
              fraudulent job postings, such as EMSCAD, or create your own by
              gathering job advertisements and manually annotating them.
            </li>
            <li>
              Train a machine learning model: Choose a suitable machine learning
              algorithm and train the model using the dataset. You may need to
              preprocess the data and experiment with different algorithms and
              parameters to achieve the best results.
            </li>
            <li>
              Evaluate the model: Measure the performance of the model using
              metrics like precision, recall, and f1 score to ensure it meets
              your desired level of accuracy.
            </li>
            <li>
              Develop a webapp: Create a user interface that allows users to
              input job advertisements and receive predictions from your trained
              model. You can use web development frameworks like Flask or Django
              for this purpose.
            </li>
            <li>
              Deploy the webapp: Host your webapp on a server or cloud platform
              like AWS, Google Cloud, or Heroku to make it accessible to users
              online.
            </li>
          </ol>
          <br />
          Remember that creating a machine learning-powered webapp requires
          knowledge of programming, data science, and web development. It's a
          complex process, but with the right resources and determination, you
          can create a tool that helps protect job seekers from online
          recruitment fraud.
        </FaqItem>
      </VStack>
    </Container>
  );
};

export default FAQ;
