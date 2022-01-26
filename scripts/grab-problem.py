import os
from requests import get
from bs4 import BeautifulSoup
import re
import logging
import argparse

def init_argpase():
    parser = argparse.ArgumentParser(description='Scrapes the url provided to get the challenges problem statement')
    parser.add_argument('name', help="used as the default challenge name")
    parser.add_argument('url', nargs="?", help="url override if name fails")
    return parser

def init_logger():
    # create logger
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    # create console handler
    console_handler = logging.StreamHandler()
    console_handler.setLevel(logging.INFO)
    console_handler.setFormatter(logging.Formatter('%(levelname)s: %(message)s'))

    # add console handler to logger
    logger.addHandler(console_handler)
    return logger

def write_to_file(file_name, contents):
    f = open(file_name, "w")
    f.write(contents)
    f.close()

def get_html(url):
    """Creates a response object with the raw HTML from the URL.
    :param str url: the website being requested
    :return: a nicely formatted string of the HTML retrieved
    """
    # Gets the raw HTML with the tags
    headers = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"}
    response = get(url, headers=headers)
    beau_soup = BeautifulSoup(response.content, 'html.parser')
    for br in beau_soup.find_all("br"):
        br.replace_with("\n")

    # Get relevant body text
    problem_body = beau_soup.find_all("div", class_="challenge-body-html")[0]

    # replacements
    for challenge in problem_body.find_all("div", class_=re.compile("^challenge")):
        challenge.append("\n")

    for title_div in problem_body.find_all("div", class_=re.compile("title$")):
        title = f"### {title_div.text.strip()}\n"
        title_div.replace_with(title)

    for strong in problem_body.find_all("strong"):
        titledd = f"\n\n### {strong.text}"
        strong.replace_with(titledd)

    for span in problem_body.find_all("span", class_="MathJax_SVG"):
        span.replace_with("``")

    for li in problem_body.find_all("li"):
        updated_list = f"- {li.text.lstrip()}"
        li.replace_with(updated_list)

    for group in problem_body.find_all(["ol", "ul"]):
        group.replace_with(group.get_text().strip())

    for pre in problem_body.find_all("pre"):
        code = f"```\n{pre.text.strip()}\n```"
        pre.replace_with(code)

    problem_body = re.sub(r'[\n]{3,}', '\n\n', problem_body.get_text())
    problem_body = re.sub(r' +', ' ', problem_body)

    write_to_file("README.md", problem_body)


if __name__ == "__main__":
    parser = init_argpase()
    args = parser.parse_args()
    logger = init_logger()

    if not args.url:
        logger.info("using name as url doesn't exist")
        link = f"https://www.hackerrank.com/challenges/{args.name}/problem"
        get_html(link)
    else:
        logger.info("using url as name override")
        get_html(args.url)